<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\TestController;
use App\Http\Controllers\api\GroqController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Api\HouseController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', [TestController::class, 'index'])->name('index');

Route::post('/groq-chat', [GroqController::class, 'chat']);

Route::post('/register', [RegisterController::class, 'register'])->name('register');

Route::post('/login', [LoginController::class, 'login']);

Route::get('/featured-houses', [HouseController::class, 'featured']);

Route::get('/houses/{id}', [HouseController::class, 'show']);