<?php

use App\Enums\LogEnum;

// function info()
// {
//     //
// }

function error($message, $http_code, $data, $exception)
{
    $usuario = '';
    $class = '';
    $class_name = '';

    $relatorio = $data ? json_encode($data) : null;

    $log_mensage = $exception ?
        "{$message} - {$exception->getMessage()} - {$exception->getFile()} - {$exception->getLine()}"
        : "{$message}";

    $log_code = $exception ? $exception->getCode() : null;

    $log_id = log($class_name, $log_mensage, $relatorio, $usuario, LogEnum::ERROR, $http_code, $log_code);

    return response()->json([
        'status' => 'Error',
        'message' => $message,
        'data' => null,
        'log_id' => $log_id
    ], $http_code);
}

function warning($message, $http_code, $data)
{
    $usuario = '';
    $class = '';
    $class_name = '';

    $relatorio = $data ? json_encode($data) : null;

    $log_id = log($class_name, $message, $relatorio, $usuario, LogEnum::WARN, $http_code);

    return response()->json([
        'status' => 'Warning',
        'message' => $message,
        'data' => $data,
        'log_id' => $log_id
    ], $http_code);
}

function success($message, $http_code = 200, $data = null)
{
    $usuario = '';
    $class = '';
    $class_name = '';

    $relatorio = null;

    $log_id = log($class_name, $message, $relatorio, $usuario, LogEnum::SUCCESS, $http_code);

    return response()->json([
        'status' => 'Sucesso',
        'message' => $message,
        'data' => $data,
        'log_id' => $log_id
    ], $http_code);
}

function critical()
{
    //
}

function alert()
{
    //
}

function notice()
{
    //
}

function emergency()
{
    //
}

function debug()
    {
        //
    }
