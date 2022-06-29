<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('supplier_id');
            $table->text('features');
            $table->decimal('price', $precision = 12, $scale = 2);
            $table->timestamps();

            $table->foreign('brand_id')->references('id')->on('brands')
                ->onUpdate('cascade')
                ->onDelete('restrict');

            $table->foreign('supplier_id')->references('id')->on('suppliers')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
