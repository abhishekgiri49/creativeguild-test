<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\FrontendController;
use App\Repository\AccountInterface;
use Hash;
use Illuminate\Http\Request;
use Validator;

class ProfileController extends FrontendController
{
    protected $user;
    public function __construct(AccountInterface $user)
    {
        parent::__construct();
        $this->user = $user;
    }
    public function viewProfile(Request $request)
    {

        $accounts = $this->user->getById($request->user()->id);

        $response = ['status' => true, 'message' => 'Profile Detail !!', 'body' => $accounts];
        return response($response, 200);
    }
    public function updateProfile(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:55',
            'username' => 'required|unique:users,username,' . $this->authUser->id,
            'email' => 'required|email|unique:users,email,' . $this->authUser->id,
            'phone' => 'required|unique:users,phone,' . $this->authUser->id,
            'address' => 'max:55',
            'image' => '',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'data' => '', 'body' => $validator->errors()], 401);
        }
        $validatedData = $request->all();
        $accounts = $this->user->getById($request->user()->id);
        $accounts->update($validatedData);
        $response = ['status' => true, 'message' => 'Profile Updated !!', 'body' => $accounts];
        return response($response, 200);
    }
    public function updatePassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'oldpassword' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
        }
        if (Hash::check($request->oldpassword, $this->authUser->password)) {
            $form['password'] = Hash::make($request->password);
            $this->user->update($this->authUser->id, $form);
            $user = $this->user->getUserByUsername($this->authUser->username);
            $response = ['status' => true, 'message' => 'Password Updated !!', 'data' => ''];
            return response($response, 200);
        } else {
            $error['oldpassword'] = ['old Password incorrect '];
            $response = ['status' => false, 'body' => $error, 'data' => ''];
            return response($response, 401);
        }

    }

}
