<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(){

        #kalo pake query builder student = DB::table('student')-get();
        $students = Student::all(); #menggunakan eloquent

        $data = [
            'message' => 'Get  all student',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama'  => $request->nama,
            'nim'   => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan

        ];

        #menggunakan model Student untuk tambah data
        $students = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $students,
        ];

        #mengembalikan data (json) dan kode 201
        return response()->json($data, 201);
    }

    public function update($id, Request $request){
        $students = Student::find($id);
        $students->update($request->all());

        $data = [
            'message' => 'Student is updated successfully',
            'data' => $students,
        ];

        return response()->json($data, 200);    
    }

    public function delete($id){
        $students = Student::find($id);
        $students->delete();

        $data = [
            'message' => 'Student is deleted successfully',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }
    

}
