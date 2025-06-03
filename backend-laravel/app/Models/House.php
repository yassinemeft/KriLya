<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class House extends Model
{
    // 
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'title',
        'description',
        'house_type',
        'price_per_night',
        'currency',
        'available_from',
        'available_to',
        'is_available',
        'address',
        'city',
        'region',
        'latitude',
        'longitude',
        'rooms',
        'bedrooms',
        'bathrooms',
        'capacity',
        'verified',
        'status',
    ];

    public function images()
    {
        return $this->hasMany(HouseImage::class);
    }

    public function amenities()
    {
        return $this->hasMany(HouseAmenity::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }
}
