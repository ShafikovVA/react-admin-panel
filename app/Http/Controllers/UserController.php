<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    //
    public function updateOrCreate(UserRequest $request){

        $request->validated();
        $user = [
            'name' => $request->input('name'), 
            'email' => $request->input('email'), 
            'password' => $request->input('password'), 
        ];
        $user = User::updateOrCreate(
            ['email' => $request->input('email')],
            $user
        );
        return $user;
    }
    public function get_all(){
        return User::paginate(1);
    }
    public function get_user(Request $request){
        $user = User::find($request->id);
        return $user;
    }

    
}
