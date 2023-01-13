<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

use Session;

class HomeController extends FrontendController
{
     use HasRoles;


     protected $userAccounts;

     protected $authUser;


     /**
      * Create a new controller instance.
      *
      * @return void
      */

     function __construct()
     {
          parent::__construct();
     }

     /**
      * Show the application dashboard.
      *
      * @return \Illuminate\Http\Response
      */

}
