<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('api/person/{name}', function ($name = '') {
    sleep(1);
    return [
        'val1' => 10,
        'val2' => 20
    ];
});

Route::get('api/facility/{facility}', function ($facility = '') {
    return [
        'val3' => 30,
        'val4' => 40
    ];
});

Route::get('api/exposure/{exposure}', function ($exposure = '') {
    return [
        'val5' => 50,
    ];
});

Route::get('/{any}', function ($any = null) {
    return view('app');
})->where('any', '.*');
