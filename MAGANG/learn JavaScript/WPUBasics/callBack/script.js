//Asyncronous callback
/*
function getDataSiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            success(xhr.response);
      } else if (xhr.status === 404) {
          error();
        }
    }
  };
  
  xhr.open('get', url);
  xhr.send();
}

getDataSiswa('siswa/siswa.json', result => {
    const ssw = JSON.parse(result);
    for ( const s of ssw ){
        console.log(s.nama)
    }
  }, () => {}
);
*/

/*
// JQUERY
$.ajax({
  url: 'siswa/siswa.json',
  success: (ssw) => {
    for (const s of ssw) {
      console.log(s.email);
    }
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
*/

// <<<<<<<<<<<<<<<<<<<<<<<<< LATIHAN CALLBACK >>>>>>>>>>>>>>>>>>>>>>>>>>>

$('.search-button').on('click' , function(){

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=bcebad95&s=' + $('.input-keyword').val(),
    success: (result) => {
      const movies = result.Search;
      let cards = '';
      movies.forEach((m) => {
        cards += showCards(m) ;
      });
  
      $('.movie-container').html(cards);
  
      //ketika tombol detail di klik
      $('.button-detail-modal').on('click', function () {
        $.ajax({
          url: 'http://www.omdbapi.com/?apikey=bcebad95&i=' + $(this).data('imdbid'),
          success: (m) => {
            const movieDetail = showDetail(m) ;
            $('.modal-body').html(movieDetail);
          },
  
          error: (e) => {
            console.log(e.responseText());
          },
        });
      });
    },
  
    error: (e) => {
      console.log(e.responseText());
    },
  });
})


function showDetail(m){

  return `
  <div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid" />
    </div>
    <div class="col-md">
        <ul class="list-group">
            <li class="list-group-item"><h4> ${m.Title} </h4></li>
            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
            <li class="list-group-item"><strong>Actor : </strong> ${m.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
            <li class="list-group-item"><strong>Plot : </strong>  <br> ${m.Plot}</li>
          </ul>
    </div>
  </div>
</div>`

}

function showCards (m){
  return ` <div class="col-md-4 my-5">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
      <a href="#" class="btn btn-primary button-detail-modal"  data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show Detail</a>
    </div>
  </div>
</div>`
}