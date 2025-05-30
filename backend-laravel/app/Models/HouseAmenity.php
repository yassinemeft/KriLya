<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HouseAmenity extends Model
{
    //
    use HasFactory;

    protected $fillable = ['house_id', 'name'];

    public function house()
    {
        return $this->belongsTo(House::class);
    }
}
