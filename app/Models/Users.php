<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use OwenIt\Auditing\Auditable as Auditables;
use OwenIt\Auditing\Contracts\Auditable;
use Spatie\Permission\Traits\HasRoles;

class Users extends Authenticatable implements Auditable
{
    use HasApiTokens;
    use Notifiable;
    use Auditables;
    use HasRoles;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'bio', 'email', 'status', 'activation_code', 'activation_date',
         'image', 'phone', 'address', 'dob', 'country', 'password', 'provider_id', 'token',
          'provider', 'is_login', 'last_login_date','city','gender','interested'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'pivot',
    ];

    // *
    //  * The attributes that should be cast to native types.
    //  *
    //  * @var array

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = app('hash')->needsRehash($input) ? Hash::make($input) : $input;
        }

    }
    public function role()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }
    public function country()
    {
        return $this->belongsTo(Countries::class, 'country');
    }

}
