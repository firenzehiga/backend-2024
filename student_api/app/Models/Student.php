<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $fillable = ['nama', 'nim', 'email', 'jurusan'];
    // public $timestamps = false;
    #membuat fungsi getAllStudents di model Student
//    public static function getAllStudents()
//    {
//     $students = DB::select('select * from students');
//    return $students;
//    }
}

