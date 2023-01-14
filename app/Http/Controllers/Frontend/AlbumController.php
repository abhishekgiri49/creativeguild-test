<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Frontend\FrontendController;
use App\Repository\AccountInterface;
use App\Repository\AlbumInterface;
use File;
use Illuminate\Support\Facades\Validator;

class AlbumController extends FrontendController
{
    protected $user;
    protected $album;
    public function __construct(AccountInterface $user,AlbumInterface $album)
    {
        parent::__construct();
        $this->user = $user;
        $this->album = $album;
    }

    #list album of particular logged in users
    function list(Request $request) {
        
        $album = $this->album->getAll()->where('user_id',auth()->user()->id)->paginate($this->apiPerPage);;
        $response = ['status' => true, 'message' => 'Album List !!', 'body' => $album];
        return response($response, 200);
    }

    #create new album as per users need
    public function create(Request $request)
    {
        if ($request->method() == "POST") {
            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'description' => 'required',
                'featured' => 'required',
                'image'=>''
            ]);
            if ($validator->fails()) {
                return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
            }
            $validatedData = $validator->validated();
            $validatedData['user_id'] = auth()->user()->id;
            $validatedData['date'] = date('Y-m-d');
            $imageName = time() . '.' . request()->image->getClientOriginalExtension();
            request()->image->move(public_path('uploads/album-images'), $imageName);
            $validatedData['image'] = $imageName;
            $this->album->create($validatedData);
            return response()->json(['status' => true, 'message' => '', 'body' => "Album created!"], 200);
        
        }
    }

    #update album 
    public function update($id,Request $request)
    {
        if ($request->method() == "POST") {
            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'description' => 'required',
                'featured' => 'required',
                'image'=>''
            ]);
            if ($validator->fails()) {
                return response()->json(['status' => false, 'message' => '', 'body' => $validator->errors()], 401);
            }
            $validatedData = $validator->validated();
        
            if ($request->hasFile('image')) {
                $album = $this->album->getAlbumById($request->id);
                $dir = 'uploads/album-images/';
                if ($album->image != '' && File::exists($dir . $album->image)) {
                    File::delete($dir . $album->image);}

                $imageName = time() . '.' . request()->image->getClientOriginalExtension();
                request()->image->move(public_path('uploads/album-images'), $imageName);
                $validatedData['image'] = $imageName;
            }
            $validatedData['date'] = date('Y-m-d');
            $this->album->update($request->id, $validatedData);
            return response()->json(['status' => true, 'message' => '', 'body' => "Album Updated"], 200);
            
        }
    }
    public function delete($id)
    {
        $album = $this->album->getAlbumById($id);
        if ($album->image != '' && File::exists($dir . $album->image)) {
            File::delete($dir . $album->image);}
        $album->delete();
        return response()->json(['status' => true, 'message' => '', 'body' => "Album item deleted successfully!"], 200);
    }
    
}
