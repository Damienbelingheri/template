<?php

declare(strict_types=1);

namespace App\GraphQL\Root;

use App\GraphQL\Builder\CrudConfig;
use Overblog\GraphQLBundle\Annotation as GQL;

#[GQL\Type]
#[GQL\FieldsBuilder(name: 'CrudQuery', config: CrudConfig::CONFIG)]
#[GQL\FieldsBuilder(name: 'CrudEntityId', config: CrudConfig::CONFIG)]
class Query
{
}
