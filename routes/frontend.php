<?php

// use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Frontend Routes
|--------------------------------------------------------------------------
|
| Here is where you can register Frontend routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "Frontend" middleware group. Enjoy building your Frontend!
|
 */

Route::any('/{any}', 'Frontend\FrontendController@index')
    ->where('any', '^(?!api|participant).*$')->name('front.any');

