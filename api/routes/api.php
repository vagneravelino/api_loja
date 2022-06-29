<?php

use App\Http\Controllers\Admin\UserController;
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

Route::group(['prefix' => 'user'], function() {
    Route::get('/', [UserController::class, 'index'])->name('user.index');
    Route::post('/', [UserController::class, 'store'])->name('user.index');
    Route::put('/{id}', [UserController::class, 'update'])->name('user.index');
    Route::delete('/{id}', [UserController::class, 'destroy'])->name('user.index');
});

Route::get('/', function() {
    return json_encode([
        "Api" => config('app.name'),
        "Versão" => env('APP_VERSION'),
        "Desenvolvido por" => "Vagner Avelino"
    ]);
})->name('api.root');
