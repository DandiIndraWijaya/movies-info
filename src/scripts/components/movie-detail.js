class MovieDetail extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    clear(){
        this.shadowDOM.innerHTML = '';
    }

    render(){
        // Mengambil genre
    let movie = this._movie;
    let genres = '';
    movie.genres.forEach(genre => {
        genres += ', ' + genre.name;
    });
    genres = genres.substr(1);

    // Mengambil tanggal rilis
    const date = new Date(movie.release_date);

    // Mengambil durasi film
    const hour = parseInt(movie.runtime / 60);
    const minute = movie.runtime - hour * 60;

    if(movie != null){
        let url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ movie.backdrop_path;
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
            * {
                font-family: 'Montserrat',sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin: auto;
                border: 1px solid #888;
                width: 100%;
                
            }
            .image {
                flex-basis: 40%;
                height: 100%;
            }
            .row {
                display: flex
            }
            .layer {
                background-color: rgba(0, 0, 0, 0.9);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .content {
                flex-basis: 70%
            }

            .desc {
                color: white;
                margin: 70px 20px;
                position: relative;
            }

            p {
                margin-top: 15px
            }

            .low-rate {
                border: 2px solid rgb(233, 49, 49);
            }
            
            .med-rate {
                border: 2px solid rgb(212, 212, 74);
            }
            
            .high-rate {
                border: 2px solid rgb(18, 153, 18);
            }

            @media screen and (max-width: 1000px){
                .row {
                    flex-direction: column;
                }

                .desc { 
                    margin-top :10px
                }
            }
        </style>
        <div class="row" >
            <div style="background-color: black" class="image">
                <img  style="width: 100%; height: 531px" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}">
            </div>
            <div class="content" style="background-image: url(${url}); position:relative;  background-size: cover"  class="col-12 col-sm-12 col-md-8">
            
            <div class="layer">
            </div>
                <div  class="desc">
                    <div>
                        <h2 style="margin-top:10px;">${movie.title} <span style="color:grey">(${date.getFullYear()})</span></h2>  
                    </div>
                    <div class="genres" style="font-weight: light; font-size: 12px">
                        ${genres}
                    </div>
                    <div style="display: inline-block; position: relative;top: 10px;">
                        <span style="font-weight: lighter; font-size: 12px">${date.toDateString()}</span>
                    </div>
                    <div style="display: inline-block; position: relative;top: 10px; left:10px">
                        <span style="font-weight: lighter; font-size: 12px">${hour}h  ${minute}m</span>
                    </div>
                    <div style="
                    text-align: center;
                    background-color: black;
                    padding-top: 4px;
                    position: relative;
                    width: 50px;
                    font-size: 20px;
                    border-radius: 50%;
                    display: inline-block;
                    height: 40px;
                    top: 10px;
                    left: 20px"
                    class="detail-rating">
                        <span class="detail-vote">${movie.vote_average * 10}</span><sup style="font-size: 14px">%</sup>
                    </div>
                    <div style="display: inline-block; position: relative;top: 15px; left: 20px">
                        <span style="font-weight: lighter; color:grey; font-size: 8px">User Score</span>
                    </div>
                    
                    <div >

                    </div>
                    <br>
                    <hr style="margin: 5px 0px;border-top: solid 1px #242429;">
                    <p style="color: grey;"><i>${movie.tagline || '...'}</i></p>
                    <p style="font-weight: bold;">Overview</p>
                    <p>${movie.overview || null}</p>
                </div>
            </div>
        </div>`;

        // Memberi warna rating
        const getTheMovie = this.shadowDOM.querySelectorAll('.detail-rating');
        const getVote = this.shadowDOM.querySelectorAll('.detail-vote');
        for(let i = 0 ; i < getTheMovie.length ; i++){
            if(getVote[i].textContent <= 50){
                getTheMovie[i].style.border = "2px solid rgb(233, 49, 49)"
            }else if(getVote[i].textContent > 50 && getVote[i].textContent < 70){
                getTheMovie[i].style.border = "2px solid rgb(212, 212, 74)"
            }else{
                getTheMovie[i].style.border = "2px solid rgb(18, 153, 18)"
            }
        }
    }
    }
}

customElements.define("movie-detail", MovieDetail);
