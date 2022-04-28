/*
// LOOP
const mhs = [
  {
    nama: 'muhammad rifaldi',
    email: 'rifald84@gmail.com',
  },
  {
    nama: 'noname',
    email: 'noname84@gmail.com',
  },
  {
    nama: 'farid irfannuddin',
    email: 'farid84@gmail.com',
  },
];

const el = `<div class="mhs">
${mhs
  .map(
    (m) => `<ul>
<li>${m.nama}</li>
<li>${m.email}</li>
</ul>`
  )
  .join('')}
</div>`;

document.body.innerHTML = el;

*/

/*
/////////////////////////////////////////////////CONDITIONAL FOR LITERAL
const lagu = { 
  nama : 'rich brian',
  judul : 'bali',
  feat : 'NIKI'
}

const el = `<div>
<ul>
<li> ${ lagu.nama }</li>
<li> ${ lagu.judul } ${ lagu.feat ?  `(feat ${lagu.feat})` : ''} </li>
</ul>
</div>`
*/

/*
///////////////////////////////////////////////////NESTED | HTML FRAGMEN BERSARANG
const siswa = {
  nama: 'rifaldi',
  jurusan: 'rekayasa perangkat lunak',
  smester: '4',
  mapel: ['bahasa indonesia', 'matematika', 'bahasa daerah'],
};

function cetakMataPelajaran(mataPelajaran) {
  return `
  <ol>
  ${mataPelajaran.map( mp => `<li> ${mp}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="siswa">
  <h2>${siswa.nama}</h2>
  <p class="jurusan"> jurusan : ${siswa.jurusan} </p>
  <p class="smester"> smester : ${siswa.smester} </p>
  <h4 class="mapel">Mata KUliah : </h4>
${cetakMataPelajaran(siswa.mapel)}
  </div> `;

  document.body.innerHTML = el;
  */

/*
///////////////////////////////////////////////////////TAGGED TEMPLATE LITERALS
const nama = 'muhammad rifaldi'
const umur = 33

function highlight(strings , ...values){

  return strings.reduce( (result , str , i) => `${result}${str} <span class="hl">${values[i]  || ''} </span>`,'' )
}


const str = highlight`halo nama saya ${nama}, saya ${umur} tahun`
document.body.innerHTML = str
*/