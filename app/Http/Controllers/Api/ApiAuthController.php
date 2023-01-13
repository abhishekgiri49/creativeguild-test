<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Notifications\Notifications;
use App\Repository\AccountInterface;
use App\Repository\NotificationSettingInterface;
use App\Services\AuthService;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Repository\AlbumInterface;

class ApiAuthController extends Controller
{
    protected $authService;
    protected $account;
    protected $album;
    public function __construct(
        AuthService $authService,
        NotificationSettingInterface $notification,
        AccountInterface $account,
        AlbumInterface $album
    ) {
        $this->authService = $authService;
        $this->notification = $notification;
        $this->account = $account;
        $this->album = $album;
    }
    #register
    public function register(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:55',
            'phone' => 'required',
            'bio' => '',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
        }

        $validatedData = $validator->validated();

        $validatedData['password'] = bcrypt($request->password);
        $emailParts = explode('@', $validatedData['email']);


        $user = $this->account->create($validatedData);
        $this->insertAlbum($user->id);
        return response()->json(['status' => true, 'message' => [], 'body' => "Registration Successful"], 200);

    }
    #login
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'email|required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => [], 'body' => $validator->errors()], 401);
        }
        $loginData = $validator->validated();
        if (!auth()->attempt($loginData)) {
            return response()->json(['status' => false, 'message' => [], 'body' => 'Invalid Credentials'], 401);
        }
        $user = auth()->user();
        $accessToken = $this->authService->getToken($user);

        return response()->json(['status' => true, 'message' => [], 'body' => "Login Successful", "body" => ["access_token" => $accessToken['access_token'], "user" => $user, "role" => "user"]], 200);

    }
    #send reset info to email
    public function forgetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
        }
        $validationuser = $this->account->getUserByEmail($request->email);
        if (!$validationuser) {
            return response()->json(array('status' => false, 'body' => 'The Mobile No is not registered'), 422);
        } else {
            //Create Password Reset Token
            DB::table('users')->where('email',$validationuser->email)->update([
                'activation_code' => rand(000000,999999),
                'activation_date' => Carbon::now()
            ]);
            //Get the token just created above
            $tokenData = $this->account->getUserByEmail($request->email);
            $res = $this->sendResetEmail($request->email, $tokenData->activation_code);
            return response()->json(array('status' => true, 'message' => 'Reset code has been sent to your phone.', 'body' => $res), 200);
        }
    }

    ##send reset otp to email
    private function sendResetEmail($email, $code)
    {
        //Retrieve the user from the database
        try {
            
            $user = $this->account->getUserByEmail($email);//Generate, the password reset link.
            $link = asset('') . 'reset-password/' . $email;
            $data = [
                'LINK' => $link,
                'CODE' => $user->activation_code
            ];
            $code = "forget-password";
            $user->notify(new Notifications($code, $data));
            return true;
        //Here send the link with CURL with an external email API         return true;
        } catch (\Exception $e) {
            return false;
        }
    }
    
    ##function to validate otp and reset password
    public function resetPassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'otp_code' => 'required',
            'password' => 'required|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
        }
        // Validate the token
        $validationuser =   $this->account->getall()
                            ->where(['email'=>$request->email,'activation_code'=> $request->otp_code])->first();
        # if otp is invalid
        if (!$validationuser) {

            return response()->json(['status' => false, 'message' => '', 'body' => "The OTP seems to be Old or invalid!"], 401);
        } else {
            $now = Carbon::now();
            $expire_at = date("Y-m-d H:i:s",strtotime('+24 hours', strtotime($validationuser->activation_date)));
            #check expiry dtae
            if (!$validationuser) {
                return response()->json(array('status' => false, 'body' => 'This email is not registered'), 500);

            }elseif($validationuser && $now->isAfter($expire_at)){
                return response()->json(array('status' => false, 'body' => 'The OTP you have entered is expired.'), 500);
            } else {

                $validationuser->update(['password' => bcrypt($request->password)]);
                
                return response()->json(array('status' => true, 'body' => 'Success!! Password has been changed.', 'body' => ''), 200);

            }
        }

    }
    #function to logout
    public function apilogout(Request $request)
    {
        $token = $this->authService->logout();
        return response()->json(['status' => true, 'message' => '', 'body' => "You have been successfully logged out!", "data" => ''], 200);
    }

    //function to insert album using json
    public function insertAlbum($userId)
    {
        $json = file_get_contents(asset('uploads/landscapes.json'));
        $objs = json_decode($json,true);
        foreach ($objs['album'] as $obj)  {
            $data = [];
            $data = [
                'user_id'=>$userId,
                'title'=>$obj['title'],
                'description'=>$obj['description'],
                'image'=>$obj['img'],
                'date'=>$obj['date'],
                'featured'=>$obj['featured'] ? '1' : '0'
            ];
            $this->album->create($data);
        }
    }
}
