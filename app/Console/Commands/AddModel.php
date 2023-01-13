<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AddModel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:model {keyword}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $keyword = $this->argument('keyword');
        $path = 'app/Models/';
        if ($this->confirm('This will add Model. continue?')) {
            $fnamemdl = $path . $keyword . '.php';

            $txt = '<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as Auditables;


class ' . $keyword . 's extends Model implements Auditable
{
    use Auditables;

    /**
     * The attributes that have specific data types are declared
     *
     * @var array
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        ];
    protected $hidden=[
    ];


}';

            $vf = fopen($fnamemdl, 'wb');
            if (!$vf) {
                die('Error creating the file ' . $fnamemdl);
            }

            fputs($vf, $txt);
            fclose($vf);
        }
    }
}
