<?php

namespace App\Console\Commands;

use File;
use Illuminate\Console\Command;

class AddView extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:view {keyword}';

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
        $path = 'resources/views/admin/';
        if ($this->confirm('This will add view with crud function. continue?')) {
            $vpath = $path . $keyword;
            File::makeDirectory($vpath, $mode = 0777, true, true);
            $fnameview = $vpath . '/list.blade.php';

            $txt = '@extends("layouts.common.main")
@section("content")
<div class="main-box">
    <div class="box">
        <div class="box-top ">
            <div class="row">
                <div class="col-6 box-heading">
                    <h5>{{$breadcrumb["page_title"]}}</h5>
                </div>
                <div class="col-6 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#id-' . $keyword . '" aria-controls="id-' . $keyword . 'Right"><i class="fas fa-plus" data-bs-toggle="offcanvas" data-bs-target="#id-' . $keyword . '" aria-controls="id-' . $keyword . 'Right"></i>  Add ' . $keyword . '</button>
                </div>
            </div>
        </div>
        <div class="box-body pt-4 ">
            <table class="datatable table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    @php $i = 0 @endphp
                    @if (!$' . $keyword . '->isEmpty())
                    @foreach ($' . $keyword . ' as $item)
                    <tr>
                        <td>{{ ++$i }}</td>

                        <td>
                            <div class="dropdown">
                                <span class="dropdown-toggle1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h fa-fw fa-2x blue-points"></i>
                                </span>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="javascript:void(0)" data-id="{{ $item->id }}" onclick="edit(event.target)"><i class="fa fa-pencil-alt fa-fw" aria-hidden="true"></i> Edit</a></li>
                                    <li><a class="dropdown-item" onClick="return ConfirmDelete();" href="{{route(\'' . $keyword . '.delete\', $item->id)}}"><i class="fa fa-trash fa-fw" aria-hidden="true"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    @endforeach

                    @endif
                </tbody>
            </table>
        </div>
    </div>
</div>


<!--ADD NEW ' . $keyword . '-->
<div class="offcanvas offcanvas-end" tabindex="-1" id="id-' . $keyword . '" aria-labelledby="id-' . $keyword . 'Label">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Add ' . $keyword . '</h5>

        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div  id="successMessage">
        </div>
    <div class="offcanvas-body">
        <div class="canvasformholder">
            <form id="' . $keyword . 'Form">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                        <input type="hidden" name="id" id="id">

                        </div>



                        <div class="mb-3">
                            <button type="submit" id="submitBtn" class="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!--ADD NEW ' . $keyword . '-->
@push(\'scripts\')
    <script>
$(\'#' . $keyword . 'Form\').on(\'submit\',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData);
    $.ajaxSetup({
headers: {
\'X-CSRF-TOKEN\': $(\'meta[name="csrf-token"]\').attr(\'content\')
}
});
    $.ajax({
      url: "{{route(\'' . $keyword . '.create\')}}",
      type:"POST",
      data:formData,
      processData: false,
        contentType: false,
      success:function(response){
        $(\'#successMessage\').html(\'<div class="alert alert-success" role="alert">Added Successfully</div>\');
        $(\'#offcanvasRightLabel\').html(\'Add ' . $keyword . '\');
        $(\'#id\').val(\'\');
        location.reload();
      },
      error: function(response) {
        $(\'#statusErrorMsg\').text(response.responseJSON.errors.status);
      },
      });
    });
    function edit(event) {
    var id  = $(event).data("id");
    let _url = `/admin/show/' . $keyword . '/${id}`;
    $.ajax({
      url: _url,
      type: "GET",
      success: function(response) {
          if(response) {
              console.log(response);
              $(\'#offcanvasRightLabel\').html(\'Edit ' . $keyword . '\');
              $(\'#id\').val(response.data.id);
            var myOffcanvas = document.getElementById(\'id-' . $keyword . '\')
            var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
            bsOffcanvas.show()

          }
      }
    });
  }
  var myOffcanvas = document.getElementById(\'id-' . $keyword . '\')
  myOffcanvas.addEventListener(\'hidden.bs.offcanvas\', function () {
    $(\'#offcanvasRightLabel\').html(\'Add ' . $keyword . '\');
    $(\'#id\').val(\'\');


})
</script>
@endpush
@endsection
';

            $vf = fopen($fnameview, 'wb');
            if (!$vf) {
                die('Error creating the file ' . $fnameview);
            }

            fputs($vf, $txt);
            fclose($vf);
        }
    }
}
