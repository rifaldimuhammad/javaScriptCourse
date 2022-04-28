/*
/////////////////////////////////////////////////descontruring array 
let array = ['nama', 'saya' , 'adalah '  , 'muhammad ' , 'rifaldi']
let [satu , dua , tiga , empat , lima  ] = array
console.log( dua )
*/

/*
//////////////////////////////////////////reutrn value pada function 
function coba(){
    return [1 , 2];
}
const [a , b ] = coba();
*/

//////////////////////////////////////// REST PARAMETER
// let [a , ...values] = [1 , 2 ,3 ,4 ,5]

/*
//////////////////////////////////////// Destructuring object
const siswa = {
  nama: 'muhammad rifaldi',
  umur: 17,
};
const { nama, umur } = siswa;
*/

///////////////////////////////////////// Assignment tanpa deklarasi object
// ({nama , umur } = {nama : 'muhammad rifaldi' , umur : 17})

/*
///////////////////////////////////////// Assign ke variable baru + memberikan nilai default
const siswa = {
    nama: 'muhammad rifaldi',
    umur: 17,
};
const { nama : n, umur : u , email = default@gmail.com } = siswa;
*/

/*
/////////////////////////////////////////mengambil field pada object , setelah dikirim sebagai parameter function.
const siswa = {
  id: 123,
  nama: 'muhammad rifaldi',
  umur: 17,
  email: 'rifald84@gmail.com',
};
function getId({ nama }) {
  return nama;
}
console.log(getId(siswa));
*/
