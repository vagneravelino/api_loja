<?php

namespace App\Repositories\Implementation;

use App\Models\User;
use App\Repositories\Core\BaseEloquentRepository;

class UserRepository extends BaseEloquentRepository
{
    public function entity()
    {
        return User::class;
    }
}
