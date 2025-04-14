<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GroqController extends Controller
{
    public function chat(Request $request)
    {
        $userMessage = $request->input('message');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('GROQ_API_KEY'),
            'Content-Type' => 'application/json'
        ])->post('https://api.groq.com/openai/v1/chat/completions', [
            'model' => 'llama3-70b-8192',
            'messages' => [
                ['role' => 'user', 'content' => $userMessage]
            ]
        ]);

        return response()->json($response->json());
    }
}
