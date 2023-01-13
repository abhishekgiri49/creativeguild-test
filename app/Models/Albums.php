<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as Auditables;


class Albums extends Model implements Auditable
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
    protected $fillable = ['user_id','title','description','featured','image'
        ];
    protected $hidden=[
    ];


}