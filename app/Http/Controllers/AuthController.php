<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->get('email'))->first();
        if($user){
            if(password_verify($request->get('password'), $user->password)) {
                $token = $user->createToken('auth_token')->plainTextToken;
                $response = array(
                    "id"=> $user->id,
                    "email"=>  $user->email,
                    "name"=>  $user->name,
                    "access_token"=> $token
                );
                return response()
                    ->json(['message' => 'Hi '.$user->email.', welcome to home','data' => $response ],200);
            }else{
                return response()->json(['message' => 'Username dan password salah','data'=>[] ],400);
            }
        }else{
            return response()->json(['message' => 'Username dan password salah','data'=>[] ],400);
        }
       
    }

    // method for user logout and delete token
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'lgout berhasil'
        ];
    }
}
