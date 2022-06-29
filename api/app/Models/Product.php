<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'slug', 'description', 'brand_id', 'supplier_id', 'features', 'price'
    ];
}
