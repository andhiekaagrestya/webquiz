import React from 'react';

export default function Tutorial() {
  return (
    <div className="text-white text-justify text-sm m-4 flex flex-col justify-center">
      <h2 className="text-center font-comforta font-semibold text-2xl my-2">
        Petunjuk Permainan!!!{' '}
      </h2>
      <p>1. Aplikasi ini memiliki pilihan dengan 2 mode yang bisa dipilih saat akan memulai: </p>
      <p>- Soal Bahasa inggris </p>
      <p>- Soal Bahasa indonesia </p><br></br>
      <p> 2. Soal yang diberikan aplikasi berjumlah total 500 soal, dan bisa bertambah seiring waktu admin mengupdate soal</p><br></br>
      <p> 3. Saat permainan dimulai user diberikan batas 3 nyawa dan waktu untuk mengerjakan soal selama 10 detik per soal</p><br></br>
      <p> 4. Aplikasi ini memiliki 2 pilihan opsi pilihan jawaban saat permainan dimulai</p><br></br>
      <p> 5. User bisa memilih satu opsi jawaban yang menurutnya paling benar, Jika jawaban benar maka user 
      akan mendapat 10 point dari satu soal</p><br></br>
      <p> 6. Sementara itu jika user memilih jawaban yang salah atau kehabisan waktu maka nyawa akan dikurangi 1 setiap 
      jawaban salah atau kehabisan waktu untuk menjawab</p><br></br>
      <p>7. Jika nyawa user habis sebelum mencapai soal ke 500 atau habis diawal maka permainan akan otomatis berhenti dan aplikasi 
      akan memberikan poin bedasarkan soal yang dijawab dengan benar.</p><br></br>
      <p>8. Setelah permainan selesai user bisa menyimpan skor poin yang didapatkan selama permainan 
      dengan memasukan nama kedalam leaderboard.</p><br></br>
      <p className="text-center font-comforta font-semibold text-2xl my-2">Selamat Mencoba!!!!</p>
    </div>
  );
}
