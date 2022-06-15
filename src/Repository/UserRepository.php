<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Overblog\GraphQLBundle\Annotation as GQL;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User|null findOneByUsername(string $username)
 *
 * @psalm-method list<User> findAll()
 *
 * @method User[] findAll()
 *
 * @psalm-method list<User> findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 *
 * @method User[]   findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @method string[] getDepartments()
 */
// #[GQL\Provider]
final class UserRepository extends Repository implements UserProviderInterface
{
    public function __construct(protected ManagerRegistry $registry, protected Security $security)
    {
        parent::__construct($registry, User::class);
    }

    // /**
    //  * @return mixed[]
    //  */
    // #[GQL\Query(type: '[User!]!', name: 'UserListImpersonation')]
    // public function userListImpersonation(): array
    // {
    //     return $this->createQueryBuilder('u')
    //         ->where('u.roles NOT LIKE :role')
    //         ->setParameter('role', '%ROLE_ADMIN%')
    //         ->orderBy('u.lastname', 'ASC')
    //         ->getQuery()
    //         ->getResult()
    //     ;
    // }

    // #[GQL\Query(type: 'User', name: 'UserCurrent')]
    // #[GQL\Access('isAuthenticated()')]
    // public function userCurrent(): ?UserInterface
    // {
    //     return $this->getUser();
    // }

    /**
     * @return string[]
     */
    public function getDepartments(): array
    {
        $departments = [];
        $list = $this->createQueryBuilder('u')
            ->select('u.department')
            ->distinct()
            ->getQuery()
            ->getResult()
        ;

        foreach ($list as $dep) {
            if (null !== $dep['department']) {
                $department = explode('/', $dep['department'])[0];
                if (!\in_array($department, $departments) && '' !== trim($department)) {
                    $departments[] = $department;
                }
            }
        }
        sort($departments);

        return $departments;
    }

    /**
     * Loads user with username.
     */
    public function loadUserByUsername(string $username): UserInterface
    {
        return $this->loadUserByIdentifier($username);
    }

    /**
     * Loads user with username.
     */
    public function loadUserByIdentifier(string $identifier): UserInterface
    {
        $user = $this->findOneBy(['username' => $identifier]);

        if (null === $user) {
            throw new UserNotFoundException(sprintf('User "%s" not found.', $identifier));
        }

        return $user;
    }

    /**
     * Refreshes the user.
     */
    public function refreshUser(UserInterface $user): UserInterface
    {
        return $this->loadUserByIdentifier($user->getUserIdentifier());
    }

    /**
     * Supports.
     */
    public function supportsClass(string $class): bool
    {
        return User::class === $class;
    }

    protected function getUser(): ?UserInterface
    {
        return $this->security->getUser();
    }
}
