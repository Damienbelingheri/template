<?php

declare(strict_types=1);

namespace App\Users;

final class LdapThumbnailDumper
{
    /**
     * The path to dump the thumbnails to.
     */
    private string $path;

    /**
     * The ldap attribute containing the thumbnail data.
     */
    private string $attribute;

    public function __construct(string $path, string $attribute)
    {
        $this->path = $path;
        $this->attribute = $attribute;
        if (!file_exists($this->path)) {
            mkdir($this->path, 0o777, true);
        }
    }

    /**
     * Get the path of the thumbnail for username.
     */
    public function getThumbPath(string $username): string
    {
        return sprintf('%s/%s.jpg', $this->path, strtoupper($username));
    }

    /**
     * Dump a thumbnail image for given username based on attributes.
     *
     * @param mixed[] $attributes
     */
    public function dump(string $username, array $attributes): bool
    {
        if (!isset($attributes[$this->attribute]) || !$attributes[$this->attribute]) {
            return false;
        }

        $thumbPath = $this->getThumbPath($username);
        $data = $attributes[$this->attribute];

        if (!file_exists($thumbPath) || md5_file($thumbPath) !== md5($data)) {
            file_put_contents($thumbPath, $data);
        }

        return true;
    }
}
