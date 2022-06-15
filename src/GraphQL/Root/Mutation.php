<?php

declare(strict_types=1);

namespace App\GraphQL\Root;

use App\GraphQL\Builder\CrudConfig;
use Overblog\GraphQLBundle\Annotation as GQL;

#[GQL\Type]
#[GQL\FieldsBuilder(name: 'CrudMutation', config: CrudConfig::CONFIG)]
class Mutation
{
}
