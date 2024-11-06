<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index(){

        #kalo pake query builder student = DB::table('student')-get();
        $students = Student::all(); #menggunakan eloquent

        if($students->count() > 0){
            $data = [
                'message' => 'Mendapatkan data Student',
                'data' => $students,
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Tidak ada data Student',
            ];
            return response()->json($data, 404);
        }
    }

    public function store(Request $request)
    {
        // #validasi data
        // $validation = $request->validate([
        // 'nama'    => 'required|string|max:255',
        // 'nim'     => 'required|numeric|max:20',
        // 'email'   => 'required|email|unique:students,email|max:255',
        // 'jurusan' => 'required|string|max:100',
        // ]);
    
        #cara lain validasi dengan menggunakan method Validator
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|alpha|max:255',
            'nim' => 'required|unique:students|numeric',
            'email' => 'required|unique:students|max:255|email',
            'jurusan' => 'required|string|max:100',
        ]);

        if($validator->fails()){
            return response()->json([   
                'message' => 'validasi gagal',
                'errors' => $validator->errors()
            ], 422);
        }

        #menggunakan model Student untuk tambah data
        $students = Student::create($request->all());
        // $students = Student::create($validation);

        $data = [
            'message' => 'Data student berhasil ditambahkan',
            'data' => $students,
        ];

        #mengembalikan data (json) dan kode 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id ){
        # mencari id student
        $students = Student::find($id);
       #validasi data
        $validation = $request->validate([
        'nama'    => 'sometimes|string|max:255',
        'nim'     => 'sometimes|numeric' . $students->id,
        'email'   => 'sometimes|email|max:255|unique:students,email,' . $students->id,
        'jurusan' => 'sometimes|string|max:100',
        ]);

        if($students){
            $students->update($validation);
            $data = [
                'message' => 'Data student berhasil diupdate',
                'data' => $students,
            ];
            return response()->json($data, 200);
        }else{
            $data = [
                'message' => 'Data student tidak ditemukan',
            ];
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
