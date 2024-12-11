/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */

// Producing asynchronous menggunakan Promise

const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`); // Menggunakan ES6 literals
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result);  // Promise berhasil/resolve
    }, 3000);
  });
};


// Consuming promise menggunakan Async Await

const main = async () => {
  try {
    console.log("Mendownload selama 3 detik...")
    const result = await download(); // Menunggu proses promise dari download 
    showDownload(result);           // Memanggil showDownload dengan hasil saat promise download selesai
  } catch (error) {
    console.error(`Download gagal: ${error}`); // Menangkap error jika Promise gagal (Menggunakan ES6 literals) 
  }
};


main(); // akan dijalankan saat file di node



/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
