import React from 'react';

export default function TentangTambahSoal() {
  return (
    <div className="text-white text-justify text-sm m-4 flex flex-col justify-center">
      <h2 className="text-center font-comforta font-semibold text-2xl my-2">Tentang Tambah Soal</h2>
      <p> Add Question atau Tambah soal adalah fitur page yang hanya 
      bisa diakses oleh admin melalui password yang sudah admin tentukan, 
      Halaman ini berfungsi untuk menambah soal secara manual kedalam database mode soal yang 
      admin pilih, Setelah selesai menambah soal admin akan mensubmit jawaban, 
      Kemudian soal akan disimpan kedalam database aplikasi.</p>
    </div>
  );
}
