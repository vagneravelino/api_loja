<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function() {
    return json_encode([
        "Api" => "Cadastro de Produtos para Loja Vistual",
        "Versão" => '0.0.1',
        "Desenvolvido por" => "Vagner Avelino"
    ]);
})->name('api.root');
