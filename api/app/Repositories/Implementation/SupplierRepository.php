<?php

namespace App\Repositories\Implementation;

use App\Models\Supplier;
use App\Repositories\Core\BaseEloquentRepository;

class SupplierRepository extends BaseEloquentRepository
{
    public function entity()
    {
        return Supplier::class;
    }
}
