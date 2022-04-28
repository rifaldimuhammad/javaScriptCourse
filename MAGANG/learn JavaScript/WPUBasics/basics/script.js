/*FUNCTION DASAR
function calcVolKubus(a ){

    var  totalSisi;
    totalSisi = a * a * a;

    return totalSisi;
}

console.log(typeof(calcVolKubus))
console.log(calcVolKubus(3))


function tambah(a , b ){
return a + b;
}

function kali(a , b){
    return a * b;
}

var hasil = kali(tambah(10, 2), tambah(10, 3));
console.log(hasil)
*/

/*
// --------------------------------------------------------------------
//sudo variable argument
function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil
}

var coba = tambah(100,100, 100, 100);
console.log(coba)
*/

/*
// --------------------------------------------------------------------------
// rekursif
function faktorial(n){
    if(n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5))
*/

/*
// --------------------------------------------------------------------------
//MANNIPULASI ARRAY 
// 1. JOIN
var arr = ['muhammad', 'rifaldi', 'cendono'];
console.log(arr.join(' '));

// 2. PUSH & POP/
arr.push('haii nama saya');

//3. SHIFT & UNSHIFT 
arr.shift()
console.log(arr.join(' '));
var arr = ['muhammad', 'rifaldi', 'cendono'];

//4. SPLICE & SLICE
// arr.splice(2, 0 , 'programer'),
console.log(arr.join(' '))

var arr2 = arr.slice(1 , 3 )

console.log(arr2.join(' '))
*/
/*
//5. FOREACH & MAP
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = [ 'rifal ', 'mohan', 'zaror']
nama.forEach(function(e, i){
    console.log('anak intern di illiyin ke-' + i + ' adalah : ' + e)
})
*/

/*
//6.  SORT
var angka = [1, 7, 3, 9, 5, 10, 6, 2, 8, 4];

angka.sort(function(a,b){
    return a - b;
})
console.log(angka.join(' '))
*/
/*
//7. FILTER & FIND 
var angka = [1, 7, 3, 9, 5, 10, 6, 2, 8, 4];
var angka2 = angka.filter(function(x){
    return x > 5 ;
})
console.log(angka2.join(' '))
*/

/*
//JJURAGAN ANGKOT & PENGEOLA PENUMPANG
var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array dan keluar dari funtion
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + ' sudah ada di dalam angkot');
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);

        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('angkot masih kosong');
  } else {
    for(var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + ' tidak ada di dalam angkot');
        // return penumpang;
      }
    }
  }
  return penumpang;
};
*/

///////////////////OBJECT
//OBJECT LITERAL
/*
var siswa1 = {
  nama: 'muhammad rifaldi',
  alamat: 'cendono',
  jurusan: 'rekayasa perangkat lunak',
  hobi: 'olahraga',
};
var siswa2 = {
  nama: 'salwa',
  alamat: 'cendono',
  jurusan: 'multimedia',
  hobi: 'rebahan',
};

// function declaration
function dataSiswa(nama, alamat, jurusan, hobi) {
  var siswa = {};
  siswa.nama = nama;
  siswa.alamat = alamat;
  siswa.jurusan = jurusan;
  siswa.hobi = hobi;

  return siswa;
}

dataSiswa('muhammad rifaldi', 'cendono', 'rekayasa perangkat lunak');

//CONSTRUCTOR
function SiswaObj(nama, alamat, jurusan, umur) {
  this.nama = nama;
  this.alamat = alamat;
  this.jurusan = jurusan;
  this.umur = umur;
}

var siswa3 = new SiswaObj('muhamad rifaldi' , 'cendono', 'rekayasa perangkat lunak', 17)
*/

/*
//LATIHAN MEMBUAT OBJECT
function angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('angkot masih kosong');
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new angkot('muhammad rifaldi', ['pandaan', 'sukorejo'], [], 0);
var angkot2 = new angkot('farid irfanudin', ['purwosari', 'lawang'], [], 0);
*/

//OBJECT NEW KONSEP
/*
//onject literal
let siswa = {
  nama : 'muhammad rifaldi',
  energy : 20,
  makan : function(porsi){
    this.energy = this.energy + porsi;
    console.log(`hallo ${this.nama} , selmat makan`)
  }
}
*/

//funtion declaration
/*
function Datasiswa(nama , energi){
  let siswa = {};
  siswa.nama = nama;
  siswa.energi = energi;

  siswa.makan = function(porsi){
    this.energi += porsi;
    console.log(`hallo ${this.nama} , selamat makan`)
  }

  siswa.main = function(jam){
    this.energi -= jam;
    console.log( `hello ${this.nama} , selamat bermain`)
  }

  return siswa;
}

let siswa1 = Datasiswa('rifaldi' ,10);
*/

/*
//funtion construc 
function Datasiswa(nama , energi){
  this.nama = nama;
  this.energi = energi;

  this.makan = function(porsi){
    this.energi += porsi;
    console.log(`hallo ${this.nama} , selamat makan`)
  }

  this.main = function(jam){
    this.energi -= jam;
    console.log( `hello ${this.nama} , selamat bermain`)
  }

}

let siswa1 = new Datasiswa('rifaldi' , 10);
*/

/*
///////////////////////////////////////////////////////OBJECT.CREATE
const methodSiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama} , selamat makan`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`hello ${this.nama} , selamat bermain`);
  },

  tidur : function(jam){
    this.energi += jam * 2;
    console.log(`hello ${this.nama} , selamt tidur`)
  }
};

function Datasiswa(nama, energi) {
  let siswa = Object.create(methodSiswa);
  siswa.nama = nama;
  siswa.energi = energi;
  return siswa;
}


let rifaldi = Datasiswa('rifaldi' , 10)
*/

///////////////////////////////////////////////////////////PROTOTYPE
/*
function Datasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Datasiswa.prototype.makan = function(porsi){
  this.energi += porsi;
  return `hello ${this.nama}, selamat makan`
}

Datasiswa.prototype.main = function(jam){
  this.energi -= jam ;
  return `hello ${this.nama}, selamat bermain`
}

Datasiswa.prototype.tidur = function(jam){
  this.energi += jam * 2;
  return `hello ${this.nama} , selamat tidur`
}
*/

// let rifaldi = new Datasiswa('rifaldi' , 10)
/*
//VERSI CLASS
class Datasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `hello ${this.nama}, selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `hello ${this.nama}, selamat bermain`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `hello ${this.nama} , selamat tidur`;
  }
}

let rifaldi = new Datasiswa('rifaldi' , 10)
*/

/*
//////////////////////////////////////////////CLOSURE
let add = (function () {
  let counter = 0;

  return function () {
    return ++counter;
  };
})();

console.log(add());
*/

//ARROW FUNCTION//////////////////////////////////////////////
//emplisit return
/*
const tampilNama = (nama , waktu) =>`hello ${nama}, selamat ${waktu}`;
console.log(tampilNama('rifaldi' , 'siang'))
*/

/*
//
let  siswa = ['rifaldi' , 'farid' , 'adit'];

let jumlahHuruf = siswa.map(nama => nama.length );
console.log(jumlahHuruf)
*/

/*
//return to object
let  siswa = ['rifaldi' , 'farid' , 'adit'];

let jumlahSiswa = siswa.map(nama => ({ nama, jumlahSiswa:siswa.length}));
console.table(jumlahSiswa);
*/

//THIS PADA KONSEP ARROW FUNcTION
/*
const siswa = function(){
  this.nama = 'rifaldi';
  this.umur = 17;
  this.sayHello = function(){
    console.log(`hello nama saya ${this.nama} , dan umur saya, ${this.umur}`)
  }
}
let rifaldi = new siswa()
*/

/*
//STUDI KASUS
const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
*/



















































































