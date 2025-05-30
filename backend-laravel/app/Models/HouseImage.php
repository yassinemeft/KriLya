<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HouseImage extends Model
{
    //
    use HasFactory;
    
        protected $fillable = ['house_id', 'url', 'is_main'];
    
        public function house()
        {
            return $this->belongsTo(House::class);
        }
}
