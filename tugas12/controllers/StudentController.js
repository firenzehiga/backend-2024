// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;
  
    try {
      // Memanggil model create dengan parameter individual
      const newStudent = await Student.create(nama, nim, email, jurusan);
  
      // Response dengan data yang baru saja diinput
      const data = {
        message: "Berhasil menambahkan data student",
        data: newStudent,
      };
  
      res.status(201).json(data); // Status 201 untuk Created
    } catch (error) {
      // Response jika terjadi error
      res.status(500).json({
        message: "Gagal menambahkan data student",
        error: error.message,
      });
    }
  }
  
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
