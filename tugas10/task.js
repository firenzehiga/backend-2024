/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */

// Producing asynchronous menggunakan Promise
const showDownload = (result) => {
  return new Promise((resolve) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`); // Menggunakan ES6 literals
    resolve(result);  // Menyelesaikan promise dengan hasil
  });
}
/**
 * Fungsi untuk download file
 * @param {function} Promises
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
  const result = await download(); // Menunggu proses promise dari download 
  showDownload(result);           // Memanggil showDownload dengan hasil saat promise download selesai

};


main(); // akan dijalankan saat file di node
