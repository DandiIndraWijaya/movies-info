import '../components/watch-trailer.js'

// menampilkan modal untuk menonton trailer
const watchTrailer = (key) => {

    if(key != null){
        document.querySelector('watch-trailer').movie = key;
    }else {
        modalContent.innerHTML = `
        <center><h2>Video not Available</h2></center>`
    }
    
}

export default watchTrailer;