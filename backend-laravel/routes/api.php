<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\TestController;
use App\Http\Controllers\api\GroqController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', [TestController::class, 'index'])->name('index');

Route::post('/groq-chat', [GroqController::class, 'chat']);
