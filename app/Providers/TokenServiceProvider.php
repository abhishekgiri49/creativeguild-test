<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Library\Services\AuthService;
class TokenServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Library\Services\AuthService', function ($app) {
            return new AuthService();
          });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
