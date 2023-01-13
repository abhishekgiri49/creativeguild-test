<?php

// use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::post('/login', 'Frontend\LoginController@login');
Route::group(['namespace' => 'Api', 'as' => 'api.'], function () {
    Route::post('/login', 'ApiAuthController@login')->name('login.api');
    Route::post('/register', 'ApiAuthController@register')->name('register.api');
    Route::post('verify', 'ApiAuthController@activateAccount')->name('activate.api');
    Route::post('/forget-password', 'ApiAuthController@forgetPassword')->name('forget.api');
    Route::post('/verify/forget-password', 'ApiAuthController@verifyForgetPasswordOtp')->name('verify.forget.api');
    Route::post('/reset-password', 'ApiAuthController@resetPassword')->name('reset.api');

});
Route::middleware('auth:api')->group(function () {
    // our routes to be protected will go in here
    Route::post('/api-logout', 'Api\ApiAuthController@apilogout')->name('logout.api');

    //item
    Route::post('/album/list', 'Frontend\AlbumController@list')->name('album.list.api');
    Route::post('/album/create', 'Frontend\AlbumController@create')->name('album.create.api');
    Route::post('/album/update/{id}', 'Frontend\AlbumController@update')->name('album.update.api');
    Route::get('/album/delete/{id}', 'Frontend\AlbumController@delete')->name('album.distroy.api');
    //profile
    Route::get('/user/profile', 'Frontend\ProfileController@viewProfile')->name('user.profile.add.api');
    Route::post('/update/profile', 'Frontend\ProfileController@updateProfile')->name('update.profile.add.api');
    Route::post('/update/password', 'Frontend\ProfileController@updatePassword')->name('update.password.add.api');
});
