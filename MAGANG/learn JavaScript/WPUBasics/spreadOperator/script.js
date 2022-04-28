/*
///////////////////////////////////////////////SPREAD OPERATOR
//MEMECAH LITERABLES MENJADI SINGLE ELEMENT
let siswa = [ 'rifaldi' , 'zaror' , 'mohan']
console.log(...siswa)
console.log(...siswa[1])
*/

/*
/////////////////////////////////////////////// MENGGABUNGKAN DUA ARRAY
let siswa = ['rifaldi', 'zaror', 'mohan'];
let guru = ['ibnu', 'faiz'];

let illiyin = [...guru, 'firman', ...siswa];
// let illiyin = siswa.concat(guru)
console.log(illiyin);
*/

/*
/////////////////////////////////////////////// MENGCOPY ARRAY
let siswa = ['rifaldi', 'zaror', 'mohan'];
const siswa1 = [...siswa]
siswa1[0] = 'pushman'
console.log(siswa1)
*/

/*
/////////////////////////////////////////////// MEMASUKAN ELEMEN ARRAY KE DALAM ARRAY
let siswa = document.querySelectorAll('li');

let siswa1 = [...siswa].map((s) => s.textContent);

console.log(siswa1);
*/

/////////////////////////////////////////////// STUDI KASUS | MENJADIKAN SINGLE STRING
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;
