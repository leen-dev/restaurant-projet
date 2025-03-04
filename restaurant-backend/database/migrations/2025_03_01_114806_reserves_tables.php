<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        schema::create ('reserves', function (Blueprint $table) {

            $table -> string ('name');
            $table -> string ('phone');
            $table -> date ('reserve_date');
            $table -> time ('reserve_time');
            $table -> integer ('guests') -> default (1);
            $table -> timestamps ();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserves');
    }
};
