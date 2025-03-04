<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserve;

class ReserveController extends Controller
{
    public function Store (Request $request) {
        $validated = $request -> validate ([
            'name' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'date' => 'required|date',
            'time' => 'required',
            'guests' => 'required|integer|min:1|max:10'
        ]);

        Reserve::create ([
            'name' => $validated ['name'],
            'phone' => $validated ['phone'],
            'reserve_date' => $validated ['reserve_date'],
            'reserve_time' => $validated ['reserve_time'],
            'guests' => $validated ['guests'],
        ]);

        return response () -> json (['message' => 'Resrvation enregistree avec succes']);
    }
}
