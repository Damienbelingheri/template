<?php

declare(strict_types=1);

namespace App\GraphQL\Input;

use Overblog\GraphQLBundle\Annotation as GQL;

#[GQL\Input]
class TestInput
{
    #[GQL\Field()]
    public string $name;
}
