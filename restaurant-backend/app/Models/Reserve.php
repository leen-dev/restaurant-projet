<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{
   protected $fillable = ['name', 'phone', 'reserve_date', 'reserve_time', 'guests'];
}
