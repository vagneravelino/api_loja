<?php

namespace App\Repositories\Core;

use App\Repositories\Contracts\RepositoryInterface;
use App\Repositories\Exceptions\NotEntityDefined;

class BaseEloquentRepository implements RepositoryInterface
{
    protected $entity;

    public function __construct()
    {
        $this->entity = $this->resolveEntity();
    }

    public function getAll()
    {
        return $this->entity->get();
    }

    public function findById(int $id)
    {
        return $this->entity->find($id);
    }

    public function findWhere(string $column, string $value)
    {
        $this->entity->where($column, $value)->get();
        return $this;
    }

    public function findWhereFirst(string $column, string $value)
    {
        return $this->entity->where($column, $value)->first();
    }

    public function paginate(int $totalPage = 10)
    {
        $this->entity->paginate($totalPage);
        return $this;
    }

    public function store(array $data)
    {
        return $this->entity->create($data);
    }

    public function update(int $id, array $data)
    {
        $entity = $this->findById($id);

        return $entity->update($data);
    }

    public function destroy(int $id)
    {
        $entity = $this->findById($id);

        return $entity->delete();
    }

    public function relationships(...$relationships)
    {
        $this->entity = $this->entity->whit($relationships);

        return $this;
    }

    public function orderBy(string $column, string $order = 'DESC')
    {
        $this->entity = $this->entity->orderBy($column, $order);

        return $this;
    }

    public function resolveEntity()
    {
        if (!method_exists($this, 'entity')) {
            throw new NotEntityDefined();
        }

        return app($this->entity());
    }
}
