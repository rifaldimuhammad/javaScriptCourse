/*
1. every java script has a prototype, which makes inheritance possile in javascript
    id : setiap javascript memiliki prototipe, yang memungkinkan pewarisan dalam javascript


2. the prototype of an object we put methods and properties that we want oher object to inherit
    id : prototipe objek, kami menempatkan metode dan properti yang kami inginkan untuk diwarisi
         oleh objek lain



3. the constructor's prototype is not prototype of the constructor
itself, it's prototype property off all instances that are created through it;
    id : prototipe konstruktor bukan prototipe konstruktor itu sendiri, itu adalah properti
         prototipe dari semua instance yang dibuat melaluinya;



4. when a cairtain method (or property) is called, the search starts in the object
itself and if cannot be found, the search moves on to the object/s prototype.
this continues until the method is found: prototype chain.
    id : ketika metode cairtain (atau properti) dipanggil, pencarian dimulai di objek
         itu sendiri dan jika tidak dapat ditemukan, pencarian beralih ke prototipe objek.
         ini berlanjut sampai metode ditemukan: rantai prototipe.


*/

/*
//////////////////////////////////////////////////////////////////////
var rifal = {
    name : 'muhammad rifaldi',
    yearOfBearth : 2004,
    job : 'programer'
};

var Person = function(name, yearOfBearth, job){
this.name = name;
this.yearOfBearth = yearOfBearth;
this.job = job
};

Person.prototype.calculateAge = function(){
    console.log(2022 - this.yearOfBearth)
};

var rifal = new Person('muhammad rifaldi', 2004, 'programer');
var alief = new Person('alief al ghifari', 2005, 'nganggur');
var dimas = new Person('dimas', 2001, 'gamer');
rifal.calculateAge();
alief.calculateAge();
dimas.calculateAge();
*/

/*//////////////////////////////////////////////////////////////////////
//Object.create

var personProto = {
  calculateAge: function () {
    console.log(2022 - yearOfBearth);
  },
};

var rifal = Object.create(personProto);
rifal.name = 'muhammad rifaldi';
rifal.yearOfBearth = 2004;
rifal.job = 'programer';

var alief = Object.create(personProto, {
  name: { value: 'alief al ghifari' },
  yearOfBearth: { value: 2005 },
  job : {value : 'designer'}
});
*/

/*//////////////////////////////////////////////////////////////////////
//primitive & object

//primitive
var a = 20;
var b = a;
a = 50;
console.log(a);
console.log(b);

//object
var obj1 = {
  name: 'rifal',
  job: 'programer',
  age: 18,
};
var obj2 = obj1;
obj1.age = 15;
console.log(obj1.age);
console.log(obj2.age);

//function

var age = 17;
var obj = {
    name : 'rifal',
    city : 'pasuruan'
};

function change(a, b){
    a = 30;
    b.city = 'malang';
}

change(age, obj);
console.log(age);
console.log(obj.city)

*/

/*//////////////////////////////////////////////////////////////////////
//lecture : passing functions as arguments

var years = [1965, 1987, 1992, 2000, 2053];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length ; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return (2022 - el);
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
   return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(rates);
*/

/*//////////////////////////////////////////////////////////////////////
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + 'apakah kamu bisa menjelaskan apa itu UI/UX design ? ');
    };
  } else if (job === 'teacher') {
    return function (name) {
      console.log('ilmu apa yang kamu ajarkan ?' + name);
    };
  } else {
    return function (name) {
      console.log('Hello, ' + name + ' apa yang kamu kerjakan? ');
    };
  }
}

var teacherQuestion = interviewQuestion(prompt('designer, teacher atau yang laiin?'));
teacherQuestion(prompt('siapakah namamu ?'));
*/

/*//////////////////////////////////////////////////////////////////////
//lecture : IIFE

function game(){
    var score = math.random() * 10;
    console.log(score >= 5)
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5)
} ())



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck)
} (1))
console.log(score);*/

/*//////////////////////////////////////////////////////////////////////
//Lecture : Closure

function retirement(retirementAge) {
  var a = ' year left until retirement';
  return function (yearOfBearth) {
    var age = 2022 - yearOfBearth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementId = retirement(60);
retirementUS(2004);
retirementId(2004);


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ' apakah kamu bisa menjelaskan apa itu UI/UX design ? ');
    } else if (job === 'teacher') {
      console.log('ilmu apa yang kamu ajarkan ?' + name);
    } else {
      console.log('Hello, ' + name + ' apa yang kamu kerjakan? ');
    }
  };
}

interviewQuestion('teacher')('rifal');
*/

/*//////////////////////////////////////////////////////////////////////
 //Lecture : Bind, Call and Apply

var rifal = {
  name: 'muhammad rifaldi',
  age: 17,
  job: 'programer',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('selamat ' + timeOfDay + ' ibu dan bapak saya ' +  this.name + ' aku seorang ' + this.job + ' dan saya berumur ' + this.age);
    } else if (style === 'friendly') {
      console.log('haii ada apa ? aku ' + this.name + ' saya ' + this.job + ' dan saya berumur ' + this.age + ' semoga ' + timeOfDay +' menyenangkan :)') ;
    }
  },
};

var alief = {
  name : 'alief alghifari',
  age : 16,
  job : 'nganggur'
}


// rifal.presentation('friendly','pagi')
//calll
// rifal.presentation.call(alief, 'formal', 'pagi')
//apply
// rifal.presentation.apply(alief, ['formal', 'malam'])
//bind
var rifalFriendly = rifal.presentation.bind(rifal , 'friendly');
rifalFriendly('malam');

var aliefFormal = rifal.presentation.bind(rifal ,'formal');
aliefFormal('malam')

//penggunaan bind di dunia nyata
var years = [1965, 1987, 1992, 2000, 2053];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length ; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return (2022 - el);
}

function isFullAge(limit , el) {
  return el >= limit;
}

var  ages = arrayCalc(years , calculateAge);
var fullIndo = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages)
console.log(fullIndo)
 */

///////////////////////////////////////////////////////////////////////
// Coding Challange
/*
(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('correct answer!');
    } else {
      console.log('wrong answer. Try again');
    }
  };

  var q1 = new Question('apakah bahasa pemrograman Javascript adalah bahasa pemrograman paling keren di seluruh dunia?', ['yes', 'no'], 0);

  var q2 = new Question('siapa guru dari course ini? ', ['Jonas Schmedtmann', 'paiman', 'rifaldi'], 0);

  var q3 = new Question('apa penilaianmu tentang kursus coding kali ini?', ['bosan', 'senang', 'biasa aja', 'sangat senang'], 3);

  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();
  var answer = parseInt(prompt('Silahkan pilih jawaban yang benar !'));
  questions[n].checkAnswer(answer);
})();
*/

/*
(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('correct answer!');
      sc = callback(true);
    } else {
      console.log('wrong answer. Try again');
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log('score yang kamu dapatkan adalah : ' + score);
    console.log('---------------------------------');
  };

  var q1 = new Question('apakah bahasa pemrograman Javascript adalah bahasa pemrograman paling keren di seluruh dunia?', ['yes', 'no'], 0);

  var q2 = new Question('siapa guru dari course ini? ', ['Jonas Schmedtmann', 'paiman', 'rifaldi'], 0);

  var q3 = new Question('apa penilaianmu tentang kursus coding kali ini?', ['bosan', 'senang', 'biasa aja', 'sangat senang'], 3);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Silahkan pilih jawaban yang benar !');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
*/