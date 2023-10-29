//01-test-js-basic
// 10 ojek, 5 sedang antar penumpang, 3 sedang menunggu, 2 rusak
// Deklarasi variabel
// let jumlahOjek = 10;
// let ojekYangMengantar = 5;
// let ojekYangMenunggu = ojekYangMengantar+3;
// let ojekYangRusak = ojekYanMenunggu+2;

// for (let i = 1; i<= jumlahOjek; i++) {
//   // Kondisi untuk menentukan status tukang ojek
//   if (i <= ojekYangMengantar) {
//     console.log(`// Tukang Ojek ${i} sedang mengantarkan penumpang`);
//   } else if (i <= ojekYangMenunggu) {
//     console.log(`// Tukang Ojek ${i} sedang menunggu penumpang`);
//   } else {
//     console.log(`// Tukang Ojek ${i} motornya rusak`);
//   }
// }


//soal nomor 2
// class GerobakSayur {
//     constructor(pedagang, kas, pembeli) {
//       this.pedagang = pedagang; // string
//       this.kas = kas; // number
//       this.pembeli = pembeli; // array
//     }
  
//     adaYangBeli(namaPembeli, bayar) {
//       this.pembeli.push(namaPembeli);
//       this.kas += bayar;
//     }
//   }
  
//   const dagang = new GerobakSayur('Ucup', 0, []);
  
//   dagang.adaYangBeli('Nani', 10000);
//   dagang.adaYangBeli('Entin', 17000);
//   dagang.adaYangBeli('Yanti', 5000);
  
//   console.log('Nama Pedagang : ', dagang.pedagang);
//   console.log('Total Kas : ', dagang.kas);
//   console.log('Total Pembeli : ', dagang.pembeli);



//soal nomor 3
//   const tanggalAwal = new Date('08/17/1945');
// const tanggalAkhir = new Date();

// // dapatkan tahun aja dengan getFullYear
// const tahunAwal = tanggalAwal.getFullYear();
// const tahunAkhir = tanggalAkhir.getFullYear();

// // hitung selisih tahun
// const selisihTahun = tahunAkhir - tahunAwal;

// console.log(selisihTahun);



//soal nomor 4
// function capital(nama) {
//     //Mengambil huruf pertama dari nama
//     let hurufPertama = nama.charAt(0);
  
//     // Mengubah huruf pertama menjadi huruf kapital
//     hurufPertama = hurufPertama.toUpperCase();
  
//     // Menggabungkan huruf pertama dengan sisa nama
//     return hurufPertama + nama.slice(1);
//   }
  
//   console.log(capital('jokowi dodo'));
//   console.log(capital('susilo bambang yudhoyono'));
//   console.log(capital('megawati'));
//   console.log(capital('habibi'));
//   console.log(capital('abdulrachman wahid'));
//   console.log(capital('soeharto'));
//   console.log(capital('soekarno'));


//soal 5
// function domain(url) {
//     // Menghapus protokol dari URL
//     url = url.replace(/^http(s)?:\/\//, '');
  
//     // Mendapatkan hostname dari URL
//     const hostname = url.slice(url.indexOf('/') + 1);
  
    // Mengembalikan domain
//     return hostname.slice(0, hostname.indexOf('.'));
//   }
  
//   console.log(domain('https://facebook.com'));
//   console.log(domain('https://kaskus.co.id'));
//   console.log(domain('https://wikipedia.org'));



//   //soal 6
//   function lebihDekatKe100(a, b) {
//     // Mengbandingkan kedua nilai
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
  
//   console.log(lebihDekatKe100(99, 1));
//   console.log(lebihDekatKe100(46, 67));
//   console.log(lebihDekatKe100(50, 50));



//soal 7
function angkeGenap(arr) {
    // Menggunakan method Array.filter() untuk menyaring angka yang genap
    const angkaGenap = arr.filter((angka) => angka % 2 === 0);
  
    // Mengembalikan jumlah angka genap
    return angkaGenap.length;
  }
  
  console.log(angkeGenap([1, 2, 3, 4, 5, 6]));
  console.log(angkeGenap([4, 4, 4, 4, 4, 4]));
  console.log(angkeGenap([3, 5, 7, 9, 10, 100]));
