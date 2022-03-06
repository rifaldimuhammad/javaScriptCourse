//VARIABLES IN JAVASCRIPT

// var name = 'rifaldi';
// console.log(name);

//DATA TYPES : NUMBER / STRING / BOOLEAN / UNDIFINED / NULL

//VARIABLES MUTATION AND TYPE COERCION---------------------------------------------------------------------------------------------------------------------------------------------------
/*
var nama = 'rifaldi';
var umur = '17';

var pekerjaan, menikah;
pekerjaan = 'web developer';
menikah = true;

console.log(nama + ' ber umur '  + umur + ', pekerjaan dia adalah ' + pekerjaan + ' dan apakah dia akan mennikah? ' + menikah);


//VARIABLE MUTATION------------------------------------------------------------------------------------------------------------------------------------------------------
umur = 'muhammad rifaldi';
pekerjaan = 'illiyin studio';

//yang di isikan ke dalam promt akan di simpan dalam variabel dan di tamppilkan di consol.log
alert('apakah '+ nama + ' yang bekerja di ' +pekerjaan+ ' akan menikah?');
var lastName = prompt('apa nama belakang dia?');
console.log(nama + lastName);
*/
/*
//MATH OPERATOR--------------------------------------------------------------------------------------------------------------------------------------------------------
var now,yearRifal, yearDinda;
now = 2022 ;
ageRifal = 20 ; 
ageDinda = 17 ; 
yearRifal = now - ageRifal;
yearDinda= now - ageDinda;

console.log(yearRifal);
console.log(yearDinda);
console.log(now + 17);
console.log(now * 17);
console.log(now / 17);

//OPERATOL LOGICAL------------------------------------------------------------------------------------------------------------------------------------------------------
var rifalOlder = ageRifal < ageDinda;
console.log(rifalOlder)

//TYPEOFF OPERATOR
console.log(typeof rifalOlder);
console.log(typeof ageRifal);
console.log(typeof 'hello world');
*/

/*
//OPERATOR PRECEDENCE----------------------------------------------------------------------------------------------------------------------------------------------------------
var now = 2018;
var agerifal = 17;
var fullAge = 17 ; 
console.log(now - agerifal >= fullAge); //true
*/
/*
//grouping
var ageRifal = 17;
var ageDinda = 10 ; 
var average = (ageRifal + ageDinda) / 2; // yang di kurung akan di dahulukan
console.log(average)

//multiple
var x, y ;
x = y= (3 + 5) * 4 - 6; // 8 * 4 //43 - 6//26
console.log(x, y);

//MORE OPERATOR
x *= 2;
console.log(x)
x -= 2;
console.log(x);
x /= 2;
console.log(x);
*/

/*
//CODING CHALANGE-------------------------------------------------------------------------------------------------------------------------------------------------------------------
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / ( heightMark * heightMark);
var BMIJohn = massJohn / ( heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("is Mark's BMI higher than John's " + markHigherBMI );
*/

/*
//IF ELSE ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var name = 'rifaldi';

var civilStatus = prompt('apakah rifal sudah menikah');

if( civilStatus === 'sudah'){
    console.log(name + ' sudah menikah !')
}else{
    console.log(name + ' punya dinda')
}
*/

/*
//BOOLEAN LOGIC----------------------------------------------------------------------------------------------------------------------------------------------------------------------
var name = 'rifaldi';
var age = prompt('umur berapa rifaldi?');

if(age < 13){
    console.log(name +' masih kecil')
} else if(age >= 13 &&  age < 20){
console.log(name + ' seorang remaja')
} else if(age >= 20 &&  age < 30){
console.log(name + ' seorang pria')
} else if (age >= 40 && age < 10000)  {
    console.log(name + ' sudah tua')
}else {
    console.log(alert('Masukan angka dengan benar!!'))
}
*/
/*
//TERNARY OPERATOR----------------------------------------------------------------------------------------------------------------------------------------------------------------------
var name = 'kamu';
var age = prompt('kamu umur berapa?') ;

// age >= 18 ? console.log(name + ' boleh minum miras')
// :console.log(name + ' minum jus aja');


var drink = age >= 18 ? ' boleh minum miras' : ' minum jus saja';
console.log(name + drink);
*/

/*
// SWITCH STATEMENT-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
var name = 'kamu';
var job = prompt('apa pekerjaanmu ?');
var age = prompt('berapa usia mu ? ');
switch(job){
    case 'guru':
    case 'pendidik':
        console.log('kamu seorang guru, dan mengajari seorang siswa');break;
    case 'supir':
        console.log('kamu akan mengemudi mengelilingi bumi');break;
    case 'designer':
        console.log('kamu akan membuat website yang baggus');break;
    default:
        alert('Lakukanlah sesuatu');
}

switch (true){
    case age < 13:
        console.log(name + ' masih kecil');break;
    case age >= 13 && age < 20:
        console.log(name + ' seorang remaja');break;
    case age >= 20 && age < 40 :
        console.log(name + ' seorang pria');break;
    case age >= 40 && age < 10000:
        console.log( name + ' sudah tua');break;    
    default:
        alert('Masukan umur mu');
}
*/

/*
// CODING CHALANGE-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn,scoreMike);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log("john menang dengan score sebanyak " + scoreJohn + ' point');
}else if (scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('mike menang dengan score sebanyak ' + scoreMike + ' point');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('mery menang dengan score sebanyak ' + scoreMary + ' point');
} else {
    console.log('score sementara imbang');
}
*/
/*
// FUNCTION----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calcAge(birthYear){
    return 2022 - birthYear;
}
//
var ageRifal = calcAge(2004);
var ageDimas = calcAge(2000);
var ageSopo = calcAge(2003);
console.log(ageRifal, ageSopo, ageDimas);
//

function calcPensiun(thLahir, nama){
    var umur = calcAge(thLahir);
    var pensiun =  65 - umur;
    if(soalNama, pensiun > 0){
        console.log(nama + ' akan pensiun dalam ' + pensiun +' tahun lagi');
    }else if( pensiun < 0){
    }else{
        alert('masukan nama, dan tanggal lahir dengan benar');
    }
}

var soalTahun = prompt('tahun berapa kamu  lahir?');
var soalNama = prompt('siapa namamu?');
calcPensiun(soalTahun, soalNama);
*/

// FUNCTION EXPRETION--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
var kamuKerjaApa = function(nama, kerja){
    switch(kerja){
        case 'guru':
          return nama + ' kamu akan mengajari siswa';
        case 'driver':
            return nama + ' kamu akan menyupir mobil';
        case 'designer':
            return nama + ' kamu akan membuat sesuaatu yang indah';
        default:
            return nama + ' lakukanlah sesuatu';
    }
}
console.log(kamuKerjaApa('rifaldi', 'driver'));
*/

/*
// ARRAY-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//menyimpan array
var names = ['rifal', 'diki', 'bayu'];
var years = new Array(2000, 2001, 2001);

console.log(names[1]);
console.log(names.length);

//merubah array
names[1]= 'raka';
names[names.length] = 'mary';
console.log(names);

//tipe data berbeda

var rifal = ['muhammad', 'rifaldi', 2004, 'pasuruan', 'web dev' , false,  ]

rifal.unshift('hai');//menambahkan array di awal
rifal.push('last use push');//menambahkan array di akhir
console.log(rifal);

rifal.pop();//menghapus array dari akhir satu /satu
rifal.shift();//menghapus array dari awal satu /satu
console.log(rifal);


console.log(rifal.indexOf(2004));//mencari array

var kerja = prompt('rifal kerja apa?');
var siapaRifal = rifal.indexOf(kerja) === -1 ? 'rifal bukan seorang web dev' : 'rifal adalah seorang designer';
console.log(siapaRifal);
*/

/*
//CIDING CHALANGE 3-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function tipCalculatoer(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculatoer(300));

var bills =[124, 48, 268];
var tips =[tipCalculatoer(bills[0]),
          tipCalculatoer(bills[1]),
          tipCalculatoer(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]] 
console.log(tips, finalValues);
*/
/*
// OBJECT AND PROPERTIES--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// object riteral
var rifal = {
    firstName : 'muhammad ',
    lastName : 'rifaldi',
    birthday : 2004,
    family : ['sunin', 'qosim', 'rara'],
    job : 'programer',
    isMarried : false
};

//memanggil properti dari objek
console.log(rifal);
console.log(rifal.firstName);

var x = 'birthday';
console.log(rifal[x]);

//mengubah data 
rifal.job = 'designer';
rifal['isMarried'] = true ;

//new object
var jane = new Object();
jane.firstName = 'jane';
jane.birthday = 2005;
jane['lastName'] = 'haha';
console.log(jane);
*/
/*
// OBJECT AND METHOD---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var rifal = {
    firstName : 'muhammad ',
    lastName : 'rifaldi',
    birthday : 2004,
    family : ['sunin', 'qosim', 'rara'],
    job : 'programer',
    isMarried : false,
    calcAge : function(){
        this.age = 2022 - this.birthday;
    }
};

rifal.calcAge();
console.log(rifal)

*/
/*
// CODING CHALANGE-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var rifal = {
    fullName : 'm rifaldi',
    mass : 65,
    height : 1.73,
    calcBmi : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var alief = {
    fullName : 'alief alghifari',
    mass : 70,
    height : 1.75,
    calcBmi : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
rifal.calcBmi();
alief.calcBmi();
console.log(rifal, alief);

if(rifal.bmi > alief.bmi){
    console.log(rifal.fullName + ' lebih tinggi bmi nya dengan' + rifal.bmi );
}else if(alief.bmi > rifal.bmi){
    console.log(alief.fullName + ' lebih tinggi bmi nya dengan' + alief.bmi) ;

} else{
    console.log('mereke seimbang')
}
*/
/*
//LOOP--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// FOR LOOP
for (var i = 1; i < 10; i++) {
  console.log(i);
}

var rifal = ['muhammad', 'rifaldi', 2004, 'pasuruan', 'web dev', false];

for (var i = 0; i < rifal.length; i = +200) {
  console.log(rifal[i]);
}

// while LOOP
var i = 0;
while (i < rifal.length) {
  console.log(rifal[i]);
  i++;
}

*/
/*
//CONTINUE AND BREAK STATHMENT
var rifal = ['muhammad', 'rifaldi', 2004, 'pasuruan', 'web dev', false];

for (var i = 0; i < rifal.length; i++) {
  if (typeof rifal[i] !== 'string') continue;
  console.log(rifal[i]);
}

//LOOP DARI BELAKANG

for(var i = rifal.length - 1; i >= 0; i-- ){
    console.log(rifal[i])
}
*/
/*
// CODING CHALANGE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var rifal = {
  fullName: 'muhammad rifaldi',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};
var alief = {
  fullName: 'Alief Al ghifari',
  bills: [77, 475, 110, 180, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};


function calcAvarage(tips) {
  var sum = 0;
  for(var i = 0; i < tips.length; i++){
      sum = sum + tips[i];
  }
  return sum / tips.length;
}

rifal.calcTips();
alief.calcTips();
rifal.avarage = calcAvarage(rifal.tips);
alief.avarage = calcAvarage(alief.tips);
console.log(rifal, alief);

if(rifal.avarage > alief.avarage){
    console.log('keluarga '+rifal.fullName + 'membayar lebih banyak tips dengan rata rata : Rp' + rifal.avarage )
}else if(alief.avarage > rifal.avarage){
    console.log('keluarga '+ alief.fullName + 'membayar lebih banyak tips dengan rata rata : Rp' + alief.avarage )
}
*/