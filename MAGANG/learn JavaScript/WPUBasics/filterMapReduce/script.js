// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >=3 |  FOR
/*
const newAngka = []
for( let i = 0; i < angka.length; i++){
    if( angka[i] >= 3  ){
        newAngka.push(angka[i])   
    }
}
*/

//mencari angka >=3 |  FILTER
/*
const newAngka = angka.filter( a => a >= 3 );
console.log(newAngka)
*/

/*
//MAP | memetakan setiap angka dengan function yang baru
const newAngka = angka.map(a => a * 2);
console.log(newAngka)
*/

// REDUCE | jumlahkan seluruh angka pada array
/*
const newAngka = angka.reduce(( accumulator, currentValue ) => accumulator + currentValue, 10);
console.log(newAngka)
*/

/*
//METHOD CAINING | cari angka > 5 | kalikan 3
const hasil = angka.filter( a => a > 5 ) //8,9,9
    .map( a => a * 3 ) //24, 27, 27
    .reduce(( acc , cur ) => acc + cur)
co
.nsole.log(hasil)
*/

//////////////////////////////////////////////LATIHAN FILTER MAP REDUCE
//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang JAVASCRIPT LANJUTAN
let jsLanjut = videos
  .filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))

  //ambil durasi masing masing video

  .map((item) => item.dataset.duration) // mengambil atribut data sesuai yang kita kasih di html

  //ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    //10:18 -> [10,18] split
    const parts = waktu.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //jumlah kan semua detik
  .reduce((total, detik) => total + detik);

//ubah format nya menjadi jam, menit, detik

const jam = Math.floor( jsLanjut / 3600 );
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor( jsLanjut / 60 );
const detik = jsLanjut - menit * 60;


//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit , ${detik} Detik `
const jmlVideo =  videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video `



console.log();
