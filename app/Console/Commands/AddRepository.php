<?php

namespace App\Console\Commands;

use File;
use Illuminate\Console\Command;

class AddRepository extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:repository {keyword}';

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
        $path = 'app/Repository/';
        if ($this->confirm('This will add the repository. continue?')) {
            $filename = $path . $keyword . 'Interface.php';
            $id = '$id';
            $data = '$data';
            $repo = "<?php
namespace App\Repository;

interface " . $keyword . "Interface
{
    /**
     * Get  " . $keyword . " by id
     *
     * @param int
     */
    public function get" . $keyword . "ById(" . $id . ");
    /**
     * Get all " . $keyword . "  by it's ID
     *
     * @param int
     */

    /**
     * Get's all " . $keyword . ".
     *
     * @return mixed
     */
    public function getAll();

    /**
     * create a " . $keyword . "
     *
     * @return mixed
     */
    public function create(array " . $data . ");
    /**
     * Updates a " . $keyword . ".
     *
     * @param int
     * @param array
     */

    public function update( " . $id . ",array " . $data . ");

    /**
     * Deletes a " . $keyword . ".
     *
     * @param int
     */
    public function delete(" . $id . ");
}";
            $f = fopen($filename, 'wb');
            if (!$f) {
                die('Error creating the file ' . $filename);
            }

            fputs($f, $repo);
            fclose($f);

            $path = $path . $keyword;
            File::makeDirectory($path, $mode = 0777, true, true);
            $filenamecl = 'app/Repository/' . $keyword . '/' . $keyword . '.php';
            $repoClass = '<?php

namespace App\Repository\\' . $keyword . ';

use App\Models\\' . $keyword . 's;
use App\Repository\\' . $keyword . 'Interface;

Class  ' . $keyword . ' implements ' . $keyword . 'Interface
{
    protected $' . strtoLower($keyword) . ';


    public function __construct(' . $keyword . 's $' . strtoLower($keyword) . ')
    {
        $this->' . strtoLower($keyword) . '=$' . strtoLower($keyword) . ';
    }
    /**
     * Gets by id ' . strtoLower($keyword) . '.
     *
     * @return mixed
     */

    public function get' . $keyword . 'ById($' . strtoLower($keyword) . '_id){
    return $this->' . strtoLower($keyword) . '->where("id", $' . strtoLower($keyword) . '_id)->first();
    }



        /**
     * Gets all ' . strtoLower($keyword) . '.
     *
     * @return mixed
     */
    public function getAll(){
        return	$this->' . strtoLower($keyword) . '->latest();
    }

        /**
     * create a ' . strtoLower($keyword) . '
     *
     * @return mixed
     */
    public function create(array $data){
    return $this->' . strtoLower($keyword) . '->create($data);
    }
        /**
     * Updates a ' . strtoLower($keyword) . '.
     *
     * @param int
     * @param array
     */

    public function update( $id,array $data){
    return	$this->' . strtoLower($keyword) . '->find($id)->update($data);
    }

    /**
 * Deletes a ' . strtoLower($keyword) . '.
 *
 * @param int
 */
    public function delete($id){
    return	$this->' . strtoLower($keyword) . '->find($id)->delete();
    }
}
?>';
            $clf = fopen($filenamecl, 'wb');
            if (!$clf) {
                die('Error creating the file ' . $filenamecl);
            }

            fputs($clf, $repoClass);
            fclose($clf);

        }
    }
}
