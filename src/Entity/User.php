<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use KerberosBundle\User\LdapUserInterface;
use Overblog\GraphQLBundle\Annotation as GQL;
use Symfony\Bridge\Doctrine\Validator\Constraints as AssertDoctrine;
use Symfony\Component\Security\Core\User\EquatableInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * User.
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'users')]
#[AssertDoctrine\UniqueEntity('username')]
#[GQL\Type]
class User implements LdapUserInterface, EquatableInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\Column(name: 'id', type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[GQL\Field]
    protected int $id;

    #[ORM\Column(name: 'firstname', nullable: true)]
    #[GQL\Field]
    protected ?string $firstname = null;

    #[ORM\Column(name: 'lastname', nullable: true)]
    #[GQL\Field]
    protected ?string $lastname = null;

    #[ORM\Column(name: 'username', nullable: true)]
    #[GQL\Field]
    protected string $username;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[GQL\Field]
    protected string $email;

    #[ORM\Column(nullable: true)]
    protected ?string $password = null;

    #[ORM\Column(type: 'boolean', nullable: false)]
    #[Assert\NotNull]
    protected bool $isActive = false;

    /**
     * @var string[]
     */
    #[ORM\Column(type: 'array')]
    protected array $roles = [];

    protected ?string $salt = null;

    /**
     * @var mixed[]
     */
    protected ?array $attributes = [];

    #[ORM\Column(type: 'boolean', nullable: true)]
    #[GQL\Field]
    private ?bool $thumbnail = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed[]
     */
    public function getAttributes(): array
    {
        return $this->attributes ?? [];
    }

    /**
     * @param mixed[] $attributes
     */
    public function setAttributes(array $attributes): void
    {
        $this->attributes = $attributes;
    }

    public function isEqualTo(UserInterface $user): bool
    {
        if (!$user instanceof self) {
            return false;
        }

        if ($this->password !== $user->getPassword()) {
            return false;
        }

        if ($this->username !== $user->getUsername()) {
            return false;
        }

        return true;
    }

    public function eraseCredentials(): void
    {
    }

    public function getDisplayName(): string
    {
        return $this->firstname.' '.$this->lastname;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getUserIdentifier(): string
    {
        return $this->username;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getThumbnail(): ?bool
    {
        return $this->thumbnail;
    }

    public function setThumbnail(?bool $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    /**
     * @return string[]
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    public function setRoles(?array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }
}
