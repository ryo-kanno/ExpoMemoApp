<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MemoController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', function (Request $request) {
    return response()->json([
        'message' => 'logout complete'
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/memo', [MemoController::class, 'getMemoList']);
    Route::get('/memo/{id}', [MemoController::class, 'getMemoDetail']);
    Route::post('/memo/create', [MemoController::class, 'createMemo']);
    Route::post('/memo/update', [MemoController::class, 'updateMemo']);
    Route::post('/memo/delete', [MemoController::class, 'deleteMemo']);
});
