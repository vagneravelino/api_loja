<?php

namespace App\Repositories\Implementation;

use App\Models\Brand;
use App\Repositories\Core\BaseEloquentRepository;

class BrandRepository extends BaseEloquentRepository
{
    public function entity()
    {
        return Brand::class;
    }
}
