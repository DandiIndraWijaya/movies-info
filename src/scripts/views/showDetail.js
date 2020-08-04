// Menampilkan modal detail film
const showDetail = (movie) => {
    let modalContent = document.querySelector('.modal-detail-content');

    if(movie != null){
        let url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ movie.backdrop_path;
        modalContent.innerHTML = `
        <div class="row" >
            <div style="background-color: #242429" class="col-12 col-sm-12 col-md-4">
                <img  style="width: 105%; height: 529px" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}">
            </div>
            <div style="background-image: url(${url}); position:relative;  background-size: cover"  class="col-12 col-sm-12 col-md-8">
            
            <div class="layer">
            </div>
                <div  class="desc">
                    <h3>${movie.title}</h3>
                </div>
            </div>
        </div>`;
    }else {
        modalContent.innerHTML = `
        <center><h2>Video not Available</h2></center>`
    }
}

export default showDetail