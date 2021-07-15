<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
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

Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/edit/{id}', 'ArticleController@getArticle');
// Route::get('/article/{id}', 'ArticleController@getArticle');
Route::get('/article/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', [ArticleController::class, 'delete']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


