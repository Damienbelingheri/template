<?php

declare(strict_types=1);

namespace App\GraphQL\Builder;

class CrudConfig
{
    public const CONFIG = [
        // 'Code'                              => ['mutation' => false],
        //
        'default' => [
        ],
        'types' => [
            'Test' => ['operations' => 'all'],
            'User' => ['operations' => 'all'],
        ],
    ];
}
