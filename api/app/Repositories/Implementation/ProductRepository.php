<?php

namespace App\Repositories\Implementation;

use App\Models\Product;
use App\Repositories\Core\BaseEloquentRepository;
use Illuminate\Support\Str;

class ProductRepository extends BaseEloquentRepository
{
    public function entity()
    {
        return Product::class;
    }

    public function store(array $data)
    {
        $data['slug'] = Str::kebab($data['name']);

        return $this->entity->create($data);
    }

    public function update (int $id, array $data)
    {
        $data['slug'] = Str::kebab($data['name']);

        $entity = $this->findById($id);

        return $entity->update($data);
    }
}
