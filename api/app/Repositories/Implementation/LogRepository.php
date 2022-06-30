<?php

namespace App\Repositories\Implementation;

use App\Models\Logs;
use App\Repositories\Core\BaseEloquentRepository;

class LogRepository extends BaseEloquentRepository
{
    public function entity()
    {
        return Logs::class;
    }
}
