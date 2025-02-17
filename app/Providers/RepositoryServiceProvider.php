<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use RegexIterator;
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $path = base_path('app/Repository');
        $fqcns = array();
        $allFiles = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path));
$phpFiles = new RegexIterator($allFiles, '/\.php$/');
foreach ($phpFiles as $phpFile) {
    $content = file_get_contents($phpFile->getRealPath());
    $tokens = token_get_all($content);
    $namespace = '';
    for ($index = 0; isset($tokens[$index]); $index++) {
        if (!isset($tokens[$index][0])) {
            continue;
        }
        // if (T_NAMESPACE === $tokens[$index][0]) {
        //     $index += 2; // Skip namespace keyword and whitespace
        //     while (isset($tokens[$index]) && is_array($tokens[$index])) {
        //         $namespace .= $tokens[$index++][1];
        //     }
        // }
        if (T_CLASS === $tokens[$index][0] && T_WHITESPACE === $tokens[$index + 1][0] && T_STRING === $tokens[$index + 2][0]) {
            $index += 2; // Skip class keyword and whitespace
            $fqcns[] = $tokens[$index][1];

            # break if you have one class per file (psr-4 compliant)
            # otherwise you'll need to handle class constants (Foo::class)
            break;
        }
    }
}
        $rep = 'App\Repository';
        // dd($fqcns);
        foreach($fqcns as $item){
            $interface = $rep.'\\'.$item.'Interface';
            $class = $rep.'\\'.$item.'\\'.$item;
            // dd($interface);
            $this->app->singleton($interface, $class);
            
        }
        

    }
}