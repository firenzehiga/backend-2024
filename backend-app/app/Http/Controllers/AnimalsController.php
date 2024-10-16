<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    //
    
    public function index()
    {
        echo "Menampilkan data animals";
    }
    public function store()
    {
        echo "Menambahkan data animals";
    }
    public function update($id)
    {
        echo "Memperbarui data animals";
    }
    public function destroy()
    {
        echo "Menghapus data animals";
    }
}
