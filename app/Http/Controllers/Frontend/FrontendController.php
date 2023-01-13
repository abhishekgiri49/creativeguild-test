<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class FrontendController extends BaseController
{
    

    protected $perPage = 10;
    protected $apiPerPage = 8;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->authUser = \Auth::user();
            return $next($request);
        });

    }

    public function index()
    {
        // dd("here");
        return view('frontend.home');
    }

}
