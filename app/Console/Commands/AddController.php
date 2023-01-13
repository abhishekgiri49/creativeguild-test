<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AddController extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:controller {keyword}';

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
        $path = 'app/Http/Controllers/Admin/';
        if ($this->confirm('This will add controller with crud function. continue?')) {
            $fnameController = $path . $keyword . 'Controller.php';

            $txt = '<?php

namespace App\Http\Controllers\Admin;

use App;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Requests\\' . $keyword . 'Request;
use App\Repository\\' . $keyword . 'Interface;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ' . $keyword . 'Controller extends AdminController
{
    protected $' . strtoLower($keyword) . ';
    public function __construct(' . $keyword . 'Interface $' . strtoLower($keyword) . ')
    {
        parent::__construct();
        $this->' . strtoLower($keyword) . ' = $' . strtoLower($keyword) . ';
    }
    function list(Request $request) {
        $breadcrumbs = [
            "breadcrumbs" => [
                "Dashboard" => route("admin.dashboard"),
                "current_menu" => "' . $keyword . '",
            ],
            "page_title" => "' . $keyword . ' List",
        ];
        $' . strtoLower($keyword) . ' = $this->' . strtoLower($keyword) . '->getAll()->get();
        return view("admin.' . strtoLower($keyword) . '.list",compact("' . strtoLower($keyword) . '"))->with(array( "breadcrumb" => $breadcrumbs, "primary_menu" => "role.list"));
    }
    public function create(Request $request)
    {
        if ($request->method() == "POST") {
            $requestObj = app(' . $keyword . 'Request::class);
            $validatedData = $requestObj->validated();
            if ($request->id) {
                alert()->success("Successfully Updated");
                $this->' . strtoLower($keyword) . '->update($request->id, $validatedData);
            } else {
                alert()->success("Successfully Created");
                $this->' . strtoLower($keyword) . '->create($validatedData);
            }

            return response()->json(["success" => "Successfully"]);
        }
    }
    public function delete($id)
    {
        $' . strtoLower($keyword) . ' = $this->' . strtoLower($keyword) . '->get' . $keyword . 'ById($id);
        $' . strtoLower($keyword) . '->delete();
        alert()->success("' . $keyword . ' has been deleted!!");
        return redirect()->route("' . strtoLower($keyword) . '.list");
    }
    public function show(Request $request, $id)
    {

        $' . strtoLower($keyword) . ' = $this->' . strtoLower($keyword) . '->get' . $keyword . 'ById($id);
        return response()->json(["data" => $' . strtoLower($keyword) . ', "success" => "Successfully"]);
    }

}';

            $clf = fopen($fnameController, 'wb');
            if (!$clf) {
                die('Error creating the file ' . $fnameController);
            }

            fputs($clf, $txt);
            fclose($clf);
        }
    }
}
