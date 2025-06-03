<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('houses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');

            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('house_type', ['apartment', 'villa', 'studio', 'house', 'room', 'townhouse', 'condo', 'cabin', 'lodge', 'resort', 'farmhouse', 'castle', 'penthouse', 'duplex', 'triple', 'quadruplex', 'manor', 'mansion', 'cottage', 'bungalow', 'chalet', 'hut', 'igloo']);
            $table->decimal('price_per_night', 10, 2);
            $table->string('currency', 10)->default('MAD');

            $table->date('available_from')->nullable();
            $table->date('available_to')->nullable();
            $table->boolean('is_available')->default(true);

            $table->string('address')->nullable();
            $table->string('city', 100)->nullable();
            $table->string('region', 100)->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();

            $table->integer('rooms')->nullable();
            $table->integer('bedrooms')->nullable();
            $table->integer('bathrooms')->nullable();
            $table->integer('capacity')->nullable();  // max guests

            $table->boolean('verified')->default(false);
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('houses');
    }
};
