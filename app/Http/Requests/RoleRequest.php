<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return true;
    // }
    // $redirectRoute=false;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        if ($request->id) {
            return [
                'role_name' => 'required|unique:admin_roles,role_name,' . $request->id,
                'slug' => 'required|unique:admin_roles,slug,' . $request->id,
                'status' => '',
            ];
        } else {
            return [
                'role_name' => 'required|unique:admin_roles,role_name',
                'slug' => 'required|unique:admin_roles,slug',
                'status' => '',
            ];
        }
    }
}
