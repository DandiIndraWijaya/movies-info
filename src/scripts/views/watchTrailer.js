// menampilkan modal untuk menonton trailer
const watchTrailer = (key) => {
    let modalContent = document.querySelector('.modal-trailer-content');

    if(key != null){
        modalContent.innerHTML = `
        <iframe class="video" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }else {
        modalContent.innerHTML = `
        <center><h2>Video not Available</h2></center>`
    }
    
}

export default watchTrailer;