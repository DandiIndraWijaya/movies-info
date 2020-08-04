
// Menampilkan list movie hasil fetch data
const theMovie =  movies => {
    let theMovie = ``;
    movies.forEach(movie => {
        const release_date = new Date(movie.release_date)
        theMovie += `
        <div class="col-6 col-sm-6 col-md-3">
                <div class="card the-movie">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}">
                    <h6>${movie.title} </h6>
                    <div class="rating"><span class="vote">${movie.vote_average * 10}</span><sup>%</sup></div>
                    <p>${release_date.toDateString()}</p>
                    <div class="movie-button"><button class="detail">Detail</button> <button class="trailer" data-movieid="${movie.id}">Trailer</button></div>
                </div>
        </div>`;
    });

    let moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = theMovie;

    // Memberi warna rating
    const getTheMovie = document.querySelectorAll('.rating');
    const getVote = document.querySelectorAll('.vote');
    for(let i = 0 ; i < getTheMovie.length ; i++){
        if(getVote[i].textContent <= 50){
            getTheMovie[i].classList.add('low-rate')
        }else if(getVote[i].textContent > 50 && getVote[i].textContent < 70){
            getTheMovie[i].classList.add('med-rate')
        }else{
            getTheMovie[i].classList.add('high-rate');
        }
    }

    
}

export default theMovie;