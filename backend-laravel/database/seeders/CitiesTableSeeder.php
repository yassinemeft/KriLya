<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $cities = [
            ['name' => 'Ain Aouda', 'region' => 'Casablanca-Settat'],
            ['name' => 'Ain Harrouda', 'region' => 'Casablanca-Settat'],
            ['name' => 'Aousserd', 'region' => 'Dakhla-Oued Ed-Dahab'],
            ['name' => 'Arfoud', 'region' => 'Drâa-Tafilalet'],
            ['name' => 'Assa-Zag', 'region' => 'Guelmim-Oued Noun'],
            ['name' => 'Azilal', 'region' => 'Béni Mellal-Khénifra'],
            ['name' => 'Azrou', 'region' => 'Fès-Meknès'],
            ['name' => 'Bni Drar', 'region' => 'Oriental'],
            ['name' => 'Bouarfa', 'region' => 'Oriental'],
            ['name' => 'Boujaad', 'region' => 'Béni Mellal-Khénifra'],
            ['name' => 'Boulemane', 'region' => 'Fès-Meknès'],
            ['name' => 'Casablanca', 'region' => 'Casablanca-Settat'],
            ['name' => 'Chefchaouen', 'region' => 'Tanger-Tetouan-Al Hoceima'],
            ['name' => 'Dakhla', 'region' => 'Dakhla-Oued Ed-Dahab'],
            ['name' => 'El Hajeb', 'region' => 'Fès-Meknès'],
            ['name' => 'El Jadida', 'region' => 'Casablanca-Settat'],
            ['name' => 'Errachidia', 'region' => 'Drâa-Tafilalet'],
            ['name' => 'Essaouira', 'region' => 'Marrakech-Safi'],
            ['name' => 'Fès', 'region' => 'Fès-Meknès'],
            ['name' => 'Figuig', 'region' => 'Oriental'],
            ['name' => 'Guelmim', 'region' => 'Guelmim-Oued Noun'],
            ['name' => 'Ifrane', 'region' => 'Fès-Meknès'],
            ['name' => 'Kenitra', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Khemisset', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Khouribga', 'region' => 'Béni Mellal-Khénifra'],
            ['name' => 'Laayoune', 'region' => 'Laâyoune-Sakia El Hamra'],
            ['name' => 'Larache', 'region' => 'Tanger-Tetouan-Al Hoceima'],
            ['name' => 'Marrakech', 'region' => 'Marrakech-Safi'],
            ['name' => 'Meknès', 'region' => 'Fès-Meknès'],
            ['name' => 'Moulay Yacoub', 'region' => 'Fès-Meknès'],
            ['name' => 'Nador', 'region' => 'Oriental'],
            ['name' => 'Ouarzazate', 'region' => 'Drâa-Tafilalet'],
            ['name' => 'Ouezzane', 'region' => 'Tanger-Tetouan-Al Hoceima'],
            ['name' => 'Oujda', 'region' => 'Oriental'],
            ['name' => 'Rabat', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Safi', 'region' => 'Marrakech-Safi'],
            ['name' => 'Salé', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Sefrou', 'region' => 'Fès-Meknès'],
            ['name' => 'Settat', 'region' => 'Casablanca-Settat'],
            ['name' => 'Sidi Kacem', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Sidi Slimane', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Skhirate-Témara', 'region' => 'Rabat-Salé-Kénitra'],
            ['name' => 'Tanger', 'region' => 'Tanger-Tetouan-Al Hoceima'],
            ['name' => 'Taounate', 'region' => 'Fès-Meknès'],
            ['name' => 'Taroudant', 'region' => 'Souss-Massa'],
            ['name' => 'Tatouan', 'region' => 'Tanger-Tetouan-Al Hoceima'],
            ['name' => 'Taza', 'region' => 'Fès-Meknès'],
            ['name' => 'Tiznit', 'region' => 'Souss-Massa'],
            ['name' => 'Zagora', 'region' => 'Drâa-Tafilalet'],
        ];

        DB::table('cities')->insert($cities);
    }
}

