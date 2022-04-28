/*
//////////////////////////////////////////////////FOR OF | ARRAY
const siswa = ['rifaldi', 'zaror', 'mohan'];

for (const s of siswa) {
  console.log(s);
}
*/

/*
//////////////////////////////////////////////////FOR OF | STRING
const nama = 'rifaldi';
for (const n of nama) {
  console.log(n);
}

const siswa = ['rifaldi', 'zaror', 'mohan'];
for( const [i , m] of siswa.entries() ){
  console.log( `hallo ${m} , kamu urutan ke ${i}` )
}
*/

/*
//////////////////////////////////////////////////FOR OF | NOdeList
const liNama = document.querySelectorAll('.nama');
for (const l of liNama) {
  console.log(l.innerHTML);
}
*/

/*
//////////////////////////////////////////////////FOR OF | ARGUMENTS
function jumlahkan() {
  let jumlah = 0;
  for (const j of arguments) {
    jumlah += j;
  }
  return jumlah;
}
console.log(jumlahkan(10, 10, 80));
*/

/*
//////////////////////////////////////////////////FOR IN | OBEJCT
let siswa = {
  nama: 'muhammad rifaldi',
  umur: 17,
  alamat: 'pasuruan',
};
for (const s in siswa) {
  console.log(` ${s} : ${siswa[s]}`);
}
*/