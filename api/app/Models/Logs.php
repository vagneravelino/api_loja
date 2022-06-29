<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    protected $fillable = [
        'id','ip', 'data', 'http_code', 'modulo', 'nivel', 'codigo', 'mensagem', 'relatorio', 'usuario'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'usuario');
    }
}
