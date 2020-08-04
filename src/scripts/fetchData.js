import './components/movies-container.js'
import './components/the-movie.js'
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/movie';


const theMovie =  movies => {
    
    let theMovie = ``;
    movies.forEach(movie => {
        theMovie += `
        <div class="col-6 col-sm-6 col-md-3">
                <div class="card">
                    ${movie.title}
                </div>
        </div>`;
    });

    return theMovie;

}

let upComing = () => {
    axios.get(`${baseUrl}/upcoming?api_key=913b0e1fdb44fad18d3a0f8537c0ebcb&language=en-US&page=1`)
        .then(response => {

           let moviesContainer = document.querySelector('.movies-container');
           const movies = response.data.results;

           moviesContainer.innerHTML = theMovie(movies);

        }).catch(response => {
            console.log('gagal')
        })
}

export {
     upComing
} 
