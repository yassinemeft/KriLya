<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Customer;
use App\Models\Landlord;

class RegisterController extends Controller
{
    public function register(Request $request)
{
    $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6',
        'user_type' => 'required|in:customer,landlord',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'user_type' => $request->user_type,
    ]);

    if ($request->user_type == 'customer') {
        Customer::create([
            'user_id' => $user->id,
            'phone_number' => $request->phone_number,
        ]);
    } elseif ($request->user_type == 'landlord') {
        Landlord::create([
            'user_id' => $user->id,
            'phone_number' => $request->phone_number,
            'company_name' => $request->company_name,
            'address' => $request->address,
        ]);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ]);
}
}

