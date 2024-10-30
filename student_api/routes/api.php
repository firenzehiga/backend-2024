<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


# route students
Route::get('/student', [StudentController::class, 'index']);
# route store untuk menambahkan data
Route::post('/student', [StudentController::class, 'store']);
# route update untuk mengubah data
Route::put('/student/{id}', [StudentController::class, 'update']);
# route delete untuk menghapus data
Route::delete('/student/{id}', [StudentController::class, 'delete']);
# route show untuk menampilkan detail data
Route::get('/student/{id}', [StudentController::class, 'show']);
