// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  // TODO 4: Tampilkan data students
  index(req, res) {
    const namaStudent = students.map(student => student.nama); // menggunakan map untuk mengambil nama student saja
    const data = {
      message: "Menampilkan semua students",
      data: namaStudent,
    };

    res.json(data);
  }

  // TODO 5: Tambahkan data students
  store(req, res) {
    const { nama } = req.body; // Mengambil nama dari body pada postman yang kita isi
    const newStudent = {
      id: students.length + 1, // melanjutkan id otomatis
      nama
    };
    students.push(newStudent);
  
    const namaStudent = students.map(student => student.nama); // menggunakan map untuk mengambil nama student saja
    res.status(201).json({
      message: `Menambahkan data student: ${nama}`,
      data: namaStudent
    });
  }
  
  // TODO 6: Update data students
  update(req, res) {
    const { id } = req.params; // Mengambil id dari url
    const { nama } = req.body; // Mengambil nama dari body pada postman
  
    // Cari index student berdasarkan id
    const studentIndex = students.findIndex(student => student.id === parseInt(id));
  
    if (studentIndex !== -1) {
      // Jika student ditemukan, update data nama
      students[studentIndex].nama = nama;
  
      const namaStudent = students.map(student => student.nama); // menggunakan map untuk mengambil nama student saja
      res.status(200).json({
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: namaStudent,
      });
    } else {
      // Jika student tidak ditemukan
      res.status(404).json({
        message: `Student dengan id: ${id} tidak ditemukan`,
      });
    }
  }
  
  // TODO 7: Hapus data students
  destroy(req, res) {
    const { id } = req.params;
    const index = students.findIndex(stud => stud.id === parseInt(id));

    if (index !== -1) {
      students.splice(index, 1);
      const namaStudent = students.map(student => student.nama); // menggunakan map untuk mengambil nama student saja
      res.status(200).json({
        message: `Menghapus student id ${id}`,
        data: namaStudent,
      });
    } else {
      res.status(404).json({
        message: `Student dengan id: ${id} tidak ditemukan`,
      });;
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
