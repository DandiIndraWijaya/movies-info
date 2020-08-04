import axios from 'axios';
import {theMovie} from './views/theMovie.js'

const baseUrl = 'https://api.themoviedb.org/3/movie';

let upComing = () => {
    axios.get(`${baseUrl}/upcoming?api_key=913b0e1fdb44fad18d3a0f8537c0ebcb&language=en-US&page=1`)
        .then(response => {
           const movies = response.data.results;
           theMovie(movies);
        }).catch(response => {
            console.log('gagal')
        })
}

export {
     upComing
} 
