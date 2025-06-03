<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Landlord extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'phone_number',
        'company_name',
        'address',
        'description',
    ];
}

