// import express dan routing
const express = require("express");
const studentController = require("./controllers/StudentControllers");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan routing (router)
app.get("/students", studentController.index); // GET: Menampilkan semua students
app.post("/students", studentController.store); // POST: Menambahkan student baru
app.put("/students/:id", studentController.update); // PUT: Mengupdate student berdasarkan id
app.delete("/students/:id", studentController.destroy); // DELETE: Menghapus student berdasarkan id

// Mendefinisikan port
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
