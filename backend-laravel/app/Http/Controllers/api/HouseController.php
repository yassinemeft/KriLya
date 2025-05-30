<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
    //
    public function featured()
    {
        return House::with(['images' => fn($q) => $q->where('is_main', true)])
            ->latest()
            ->take(7)
            ->get()
            ->map(function ($house) {
                return [
                    'id' => $house->id,
                    'title' => $house->title,
                    'city' => $house->city,
                    'price' => number_format($house->price_per_night, 0, '', ' ') . ' MAD',
                    'img' => $house->images->first()->url ?? 'https://via.placeholder.com/400x300',
                ];
            });
    }

    public function show($id)
    {
        $house = House::with('images')->findOrFail($id);

        return [
            'id' => $house->id,
            'title' => $house->title,
            'city' => $house->city,
            'description' => $house->description,
            'price_per_night' => $house->price_per_night,
            'house_type' => $house->house_type,
            'address' => $house->address,
            'available_from' => $house->available_from,
            'available_to' => $house->available_to,
            'rooms' => $house->rooms,
            'bathrooms' => $house->bathrooms,
            'capacity' => $house->capacity,
            'region' => $house->region,
            'bedrooms' => $house->bedrooms,
            'latitude' => $house->latitude,
            'longitude' => $house->longitude,
            'main_image' => $house->images->first()?->url ?? 'https://via.placeholder.com/400x300',
            'images' => $house->images->pluck('url'), // only image URLs
            'amenities' => $house->amenities->pluck('name'),
        ];
    }
}
