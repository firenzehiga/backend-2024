// import Model Student
const Student = require("../models/Student");
const { check, validationResult } = require('express-validator');
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    // Kondisi jika panjang array lebih dari 0 maka akan menampilkan data
    if (students.length > 0) {
    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

      // menggunakan short if else
      return res.status(200).json(data);
      // res.status(200).json(data);
    }
      //else
      const data = {
        message: "Students kosong",
      };

      res.status(200).json(data);
  }

  async store(req, res) {
    // Validasi data menggunakan express-validator
    await check('nama').notEmpty().withMessage('Nama harus diisi').run(req);
    await check('email').isEmail().withMessage('Email harus valid').run(req);
    await check('nim').notEmpty().withMessage('NIM harus diisi').run(req);
    await check('jurusan').notEmpty().withMessage('Jurusan harus diisi').run(req);
  
    // Menangani hasil validasi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const data = {
        message: "Gagal menambahkan data student",
        error: errors.array(),
      }

      return res.status(400).json(data);
    }
  
    // Melakukan penambahan data dari body
    const { nama, email, nim, jurusan } = req.body;
    const student = await Student.create({ nama, email, nim, jurusan });
  
    // Response dengan data yang baru saja diinput
    return res.status(201).json({
      message: "Berhasil menambahkan data student",
      data: student,
    });
  }
  
 
  async update(req, res) {
    const { id } = req.params;

    // Cari id student
    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);

      const data = {
        message: `Mengedit data students`,
        data: student,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student dengan id: ${id} tidak ditemukan`,
      }
      
      res.status(404).json(data);
    }
  }


  async destroy(req, res) {
    const { id } = req.params;

    // Cari id student
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data students id ${id}`,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student dengan id: ${id} tidak ditemukan`,
      };
      
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    // Cari id student
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan data students id ${id}`,
        data: student,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student dengan id: ${id} tidak ditemukan`,
      };
      
      res.status(404).json(data);
    }
  }
}


// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
