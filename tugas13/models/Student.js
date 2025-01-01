// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
  
      db.query(sql, data, (err, results) => {
          // Mengembalikan data yang baru diinsert dengan id yang dihasilkan
          resolve(results.insertId);
      });
    });

    // Mengembalikan data yang baru diinsert dengan id yang dihasilkan menggunakan find
    const student = this.find(id);
    return student;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
  
      db.query(sql, id, (err, results) => {
          // Mengembalikan data yang ditemukan
          resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
  
      db.query(sql, [data, id], (err, results) => {
          // Mengembalikan data yang diupdate
          resolve({ results });
      });
    });
  
    // Mengembalikan data yang diupdate
    const student = await this.find(id);
    return student;
  }
  
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
  
      db.query(sql, id, (err, results) => {
          // Mengembalikan data yang dihapus
          resolve({ results });
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
  
      db.query(sql, id, (err, results) => {
          // Mengembalikan data yang ditemukan
          resolve(results[0]);
      });
    });
  }
  
  
}

// export class Student
module.exports = Student;
