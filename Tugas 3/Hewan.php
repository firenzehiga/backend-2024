<?php
// membuat class Binatang
class Binatang {
    public $nama = [];
    public $famili = [];
    // method constructor untuk inisialisasi data default
    public function __construct($nama, $famili) {
            $this->nama[] = $nama;
            $this->famili[] = $famili;
            
    }

    // method untuk menampilkan data binatang
    public function index() {
        foreach ($this->nama as $index => $nm) {
            echo "Nama: " . $this->nama[$index] . "<br>";
            echo "Famili: " . $this->famili[$index] . "<br><br>";
        }
    }

    // method store untuk menambahkan data binatang baru
    public function store($nama, $famili) {
        array_push($this->nama, $nama);
        array_push($this->famili, $famili);
    }

    // method update untuk mengupdate data binatang
    public function update($index, $nama, $famili) {
        $this->nama[$index] = $nama;
        $this->famili[$index] = $famili;
    }

    // method destroy untuk menghapus data binatang
    public function destroy($index) {
        array_splice($this->nama, $index, 1);
    }
}

// membuat objek dengan data default
$person = new Binatang("Elang Botak", "Accipitridae ");
echo "<h3>Data Awal:</h3>";
$person->index();

// Menambahkan data
echo "<h3>Setelah Menambah Data:</h3>";
$person->store("Keledai", "Canidae");
$person->index(); 

// Mengupdate data
echo "<h3>Setelah Mengupdate Data:</h3>";
$person->update(0, "Angsa", "Anatidae");
$person->index();  

// Menghapus data
echo "<h3>Setelah Menghapus Data:</h3>";
$person->destroy(1);  
$person->index(); 

?>
