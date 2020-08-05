import '../components/movie-detail.js'

// Menampilkan modal detail film
const showDetail = (movie) => {

    document.querySelector('movie-detail').movie = movie;

    
}

export default showDetail