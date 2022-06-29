<?php

namespace App\Helpers;

use App\Enums\LogEnum;
use Carbon\Carbon;

function log($modulo, $mensagem, $relatorio, $usuario, $nivel = LogEnum::INFO, $http_code = 200, $codigo = null)
{
    $data = [
        'ip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '',
        'data' => Carbon::now(),
        'http_code' => $http_code,
        'modulo' => $modulo,
        'nivel' => $nivel,
        'codigo' => $codigo,
        'mensagem' => $mensagem,
        'relatorio' => $relatorio,
        'usuario' => $usuario
    ];

    //TODO: Refazer Lógica utilizando Repositories.

    // try {
    //     DB::beginTransaction();

    //     $log->fill($data);
    //     $log->save();

    //     DB::commit();
    //     return $log->id;
    // } catch (\Exception $e) {
    //     DB::rollBack();
    //     $data = Carbon::now();

    //     \Illuminate\Support\Facades\Log::channel('syslog')->error("[{$data}] - Erro ao grava no banco de dados. [{$e->getCode()} - {$e->getMessage()}]");
    // }
}
