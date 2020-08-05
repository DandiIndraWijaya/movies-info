import axios from 'axios';
import theMovie from './views/theMovie.js'
import watchTrailer from './views/watchTrailer.js'
import showDetail from './views/showDetail.js'

const baseUrl = 'https://api.themoviedb.org/3/movie';


// Fungsi untuk mengambil data film terbaru
const upComing = () => {
    axios.get(`${baseUrl}/upcoming?api_key=913b0e1fdb44fad18d3a0f8537c0ebcb&language=en-US&page=1`)
        .then(response => {
           const movies = response.data.results;
           theMovie(movies);
        }).catch(response => {
            console.log('gagal')
        })
}



// Fungsi untuk mengambil link trailer film
const movieTrailer = (movieid) => {
    axios.get(`${baseUrl}/${movieid}/videos?api_key=913b0e1fdb44fad18d3a0f8537c0ebcb&language=en-US`)
        .then(response => {
            const videos = response.data.results;
            // Kode untuk menampilkan video trailer
            videos.forEach(video => {
                if(video.type == 'Trailer'){
                    watchTrailer(video.key);
                }
            })
        }).catch(response => {
            console.log('gagal');
        })

}

// Fungsi untuk mengambil data detail film yang diklik
const movieDetail = (movieid) => {
    axios.get(`${baseUrl}/${movieid}?api_key=913b0e1fdb44fad18d3a0f8537c0ebcb&language=en-US`)
        .then(response => {
            const movie = response.data;
            showDetail(movie);
        })
}

export {
     upComing,
     movieTrailer,
     movieDetail
} 
