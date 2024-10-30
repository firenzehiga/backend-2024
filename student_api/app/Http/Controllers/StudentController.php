<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(){

        #kalo pake query builder student = DB::table('student')-get();
        $students = Student::all(); #menggunakan eloquent

        if($students){
            $data = [
                'message' => 'Mendapatkan semua data Student',
                'data' => $students,
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Data Student tidak ditemukan',
            ];
            return response()->json($data, 404);
        }
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
        # mencari id student
        $students = Student::find($id);
        # cek apakah id ada
        if ($students){
            $input = [
                'nama'  => $request->nama ?? $students->nama,
                'nim'   => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'jurusan' => $request->jurusan ?? $students->jurusan,
            ];
            # melakukan update data
            $students->update($input);
    
            $data = [
                'message' => 'Data Student berhasil diubah',
                'data' => $students,
            ];
    
            # mengembalikan data json dan kode 200
            return response()->json($data, 200);    
        } else {
            
            $data = [
                    'message' => 'Data Student tidak ditemukan',
                ];
                
            # mengembalikan data json dan kode 404
            return response()->json($data, 404);
        }
    } 

    public function delete($id){
        $students = Student::find($id);
        
        if($students){
            $students->delete();
            $data = [
                'message' => 'Data Student berhasil dihapus',
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Data Student tidak ditemukan',
            ];
            return response()->json($data, 404);
        }
    }
    
    public function show($id, ){
        $students = Student::find($id);

        if($students){
            $data = [
                'message' => ' Detail Data Student ditemukan',
                'data' => $students,
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Detail Data Student tidak ditemukan',
            ];
            return response()->json($data, 404);
        }
    }

}
