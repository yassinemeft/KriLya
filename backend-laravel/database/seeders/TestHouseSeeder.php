<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TestHouseSeeder extends Seeder
{
    public function run()
    {
        // Insert a user (landlord)
        $userId = DB::table('users')->insertGetId([
            'name' => 'John Landlord',
            'email' => 'john@landlord.com',
            'password' => Hash::make('password123'),
            'user_type' => 'landlord',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Insert a house
        $houseId = DB::table('houses')->insertGetId([
            'owner_id' => $userId,
            'title' => 'Cozy Mountain Cabin',
            'description' => 'A lovely cabin in the mountains, perfect for a weekend getaway.',
            'house_type' => 'cabin',
            'price_per_night' => 120.00,
            'currency' => 'MAD',
            'available_from' => now()->addDays(1)->toDateString(),
            'available_to' => now()->addMonths(1)->toDateString(),
            'is_available' => true,
            'address' => '123 Mountain Road',
            'city' => 'Essaouira',
            'region' => 'Marrakech-Safi',
            'latitude' => 31.5085,
            'longitude' => -9.7679,
            'rooms' => 5,
            'bedrooms' => 3,
            'bathrooms' => 2,
            'capacity' => 6,
            'verified' => false,
            'status' => 'pending',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Insert some images for the house
        DB::table('house_images')->insert([
            [
                'house_id' => $houseId,
                'url' => 'https://example.com/images/cabin1.jpg',
                'is_main' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'house_id' => $houseId,
                'url' => 'https://example.com/images/cabin2.jpg',
                'is_main' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // Insert some amenities
        DB::table('house_amenities')->insert([
            ['house_id' => $houseId, 'name' => 'wifi', 'created_at' => now(), 'updated_at' => now()],
            ['house_id' => $houseId, 'name' => 'kitchen', 'created_at' => now(), 'updated_at' => now()],
            ['house_id' => $houseId, 'name' => 'balcony', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
