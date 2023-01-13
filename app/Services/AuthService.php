<?php

namespace App\Services;

use App\Models\Users;
use Carbon\Carbon;
use Illuminate\Http\Request;

/**
 * Class AuthService
 * @package Foundation\Services
 */
final class AuthService
{

    /**
     * @var Request
     */
    private $request;

    const ACCESS_TOKEN = 'Personal Access Token';

    /**
     * AuthService constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Return token
     *
     * @param Users $users
     * @param bool $remember
     * @return array
     */
    public function getToken(Users $user, bool $remember = false)
    {
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        // $user['token']  = $tokenResult->accessToken;
        // $user->save();
        if ($remember) {
            $token->expires_at = now()->addWeeks(1);
        }
        $token->save();

        return [
            'access_token' => $tokenResult->accessToken,
            // 'user'         => $user,
            'token_type' => 'bearer',
            'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
//            'tenant'       =>
        ];
    }

    /**
     * Logout the user
     *
     * @return mixed
     */
    public function logout()
    {
        return $this->request->user()->token()->revoke();
    }

    /**
     * Return the user
     *
     * @return User
     */
    public function user(): User
    {
        return $this->request->user();
    }

}
