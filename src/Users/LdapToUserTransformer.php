<?php

declare(strict_types=1);

namespace App\Users;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use KerberosBundle\Security\Transformer\LdapEntryToUserTransformerInterface;
use KerberosBundle\Security\Transformer\TransformationException;
use Symfony\Component\Ldap\Entry;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class LdapToUserTransformer implements LdapEntryToUserTransformerInterface
{
    public const ACCEPTED_PREFIXES = ['ae', 'ind', 'ext'];

    public function __construct(protected EntityManagerInterface $em, protected UserRepository $userRepository, protected ValidatorInterface $validator, protected LdapThumbnailDumper $thumbnailDumper, protected UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function refreshUser(UserInterface $user): UserInterface
    {
        return $this->userRepository->refreshUser($user);
    }

    /**
     * {@inheritdoc}
     */
    public function transform($attributes, Entry $entry)
    {
        $username = strtolower($attributes['sAMAccountName']);

        $attr = static function ($key, $default = false) use ($attributes) {
            if (isset($attributes[$key])) {
                return $attributes[$key];
            }

            return false === $default ? '' : $default;
        };

        if (!$username) {
            throw new \Exception('Ldap user found, but expected sAMAccountName attribute not found');
        }

        // Do not consider users without email or without lastname
        if (!$attr('mail') || !$attr('sn')) {
            // @phpstan-ignore-next-line
            return false;
        }
        // Do not consider users with unknown prefix
        $found = false;
        foreach (self::ACCEPTED_PREFIXES as $prefix) {
            $usernamePrefix = strtolower(substr($username, 0, \strlen($prefix)));
            if ($usernamePrefix === $prefix) {
                $found = true;
            }
        }
        // Invalid prefix
        if (!$found) {
            // @phpstan-ignore-next-line
            return false;
        }

        $user = $this->userRepository->findOneByUsername($username);

        if (!$user) {
            $user = new User();
            $user->setIsActive(true);
        }

        $user->setAttributes($attributes);


        // Base user attributes
        $user
            ->setUsername($username)
            ->setFirstname($attr('givenName'))
            ->setLastName($attr('sn'))
            ->setIsActive(true)
            ->setRoles($attributes['_roles'])
            ->setEmail($attr('mail'))
        ;

        if (!$user->getPassword()) {
            $user->setPassword($this->passwordHasher->hashPassword($user, strtolower($username)));
        }

        // Picture
        $user->setThumbnail($this->thumbnailDumper->dump($username, $attributes));

        $errors = $this->validator->validate($user);

        if (\count($errors)) {
            // @phpstan-ignore-next-line
            return new TransformationException($username, (string) $errors[0]);
        }

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }
}
