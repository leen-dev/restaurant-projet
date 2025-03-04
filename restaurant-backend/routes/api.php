<?php

use App\Http\Controllers\ReserveController;
use Illuminate\Support\Facades\Route;
//use Illuminate\Http\Request;

Route::post ('/reserves', [ReserveController::class,'store']);


