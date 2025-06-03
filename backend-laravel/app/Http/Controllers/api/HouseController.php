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
        $house = House::with('images', 'user')->findOrFail($id);

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

            // ✅ Return landlord (owner) info
            'owner' => [
                'id' => $house->user->id,
                'name' => $house->user->name,
                'email' => $house->user->email,
                'phone' => $house->user->phone ?? '+212 600 123 456',
                'company' => $house->user->company ?? 'CozyStay Rentals',
                'avatar' => $house->user->avatar ?? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
                'description' => $house->user->description ?? 'Trusted agent with years of experience.',
            ],
        ];
    }

    public function getHousesByUser($id)
{
    $houses = House::where('owner_id', $id)->with('images')->get()->map(function ($house) {
        return [
            'id' => $house->id,
            'title' => $house->title,
            'price' => $house->price_per_night,
            'city' => $house->city,
            'main_image' => $house->images->first()?->url ?? 'https://via.placeholder.com/400x300',
            'images' => $house->images->pluck('url'),
        ];
    });

    return response()->json($houses);
}
}
