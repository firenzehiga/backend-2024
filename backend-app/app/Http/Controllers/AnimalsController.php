<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    public $animals = ["Kucing", "Ayam", "Ikan"];
    
    public function index()
    {
        foreach ($this->animals as $animal) {
            echo " - $animal<br>";
            
        }
    }
    public function store(Request $request)
    {
        $animalName = $request->name;
        array_push($this->animals, $animalName);
        $this->index();
    }
    public function update(Request $request, $id)
    {
        if(!isset($this->animals[$id])) {
            echo "hewan id $id tidak ditemukan";
            
        }else{
            echo "Mengupdate data hewan id $id <br><br>";
            $animalName = $request->name;
            $this->animals[$id] = $animalName;
            $this->index();
        }
    }
    public function destroy($id)
    {
        
        if(isset($this->animals[$id]) == false) {
            echo "hewan id $id tidak ditemukan";
                        
        }else{
            echo "Menghapus data hewan id $id <br><br>";
            array_splice($this->animals, $id, 1);
            $this->index();

        }
        
    }
}
