<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->id();
            $table->string('ip', 60);
            $table->timestamp('data');
            $table->string('http_code', 60);
            $table->string('modulo', 60);
            $table->string('nivel', 40);
            $table->string('codigo', 30)->nullable()->default(null);
            $table->text('mensagem');
            $table->text('relatorio')->nullable()->default(null);
            $table->string('usuario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logs');
    }
}
