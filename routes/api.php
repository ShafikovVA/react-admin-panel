<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// USERS routes
Route::prefix('user')->group(function () {
    Route::post('/set-update', [UserController::class, 'updateOrCreate']);
    Route::get('/all', [UserController::class, 'get_all']);
    Route::get('/{id}', [UserController::class, 'get_user']);
});
