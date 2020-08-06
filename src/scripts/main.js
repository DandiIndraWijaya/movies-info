import { upComing, topRated, popular, search, movieTrailer, movieDetail } from './fetchData.js';

document.addEventListener('DOMContentLoaded', () => {
    let textLink = document.querySelectorAll('.text-link');
    const searchInfo = document.querySelector('search-info');

    searchInfo.clear();
    textLink[0].classList.add('aktif');
    upComing();

    // Kode saat mengklik link pada nav
    const link = document.querySelectorAll('.nav-link');
    for ( let i = 0 ; i < link.length; i++){
        link[i].addEventListener('click', (event) => {
            event.preventDefault();

            searchInfo.clear();

            // merubah warna text link pada nav
            textLink[0].classList.remove("aktif");
            textLink[1].classList.remove("aktif");
            textLink[2].classList.remove("aktif");
            textLink[i].classList.add("aktif");

            document.querySelector('.movies-container').innerHTML = ``;
            document.querySelector('loading-data').start();

            // Request data
            if(i == 0){
                upComing(); // Menampilkan data upcoming movie
            }else if(i == 1){
                topRated(); // Menampilkan data top rated movie
            }else{
                popular(); // Menampilkan data popular movie
            }
        });
    }

    // Kode saat mengklik tombol search
    const btnSearch = document.querySelector('#search');
    
    btnSearch.addEventListener('click', (event) => {
        event.preventDefault();


        textLink[0].classList.remove("aktif");
        textLink[1].classList.remove("aktif");
        textLink[2].classList.remove("aktif");


        searchInfo.clear();
        const keyword = document.querySelector('#keyword').value;

        
        document.querySelector('.movies-container').innerHTML = ``;
        document.querySelector('loading-data').start();

        search(keyword);
    })



    // Kode untuk menampilkan modal
    const showModal = (category) => {
            let modal = ``;
            if(category == 'trailer'){
                modal = document.getElementById("modal-trailer");
            }else{
                modal = document.getElementById("modal-detail");
            }
            modal.style.display = "block";

            // Kode untuk menutup modal
            const span = document.getElementsByClassName("close-modal");
            for(let i = 0 ; i < span.length ; i++){
                span[i].addEventListener('click', () => {
                    const video = document.querySelector('watch-trailer');
                    if(i == 1 && video.checkVideo() == true){
                        video.stop();
                        video.movie = null;
                    }
                    modal.style.display = "none";
                }) 
            }
            
    }

    // Kode saat mengklik tombol detail dan tombol trailer
    document.addEventListener('click',function (event) {
        if(event.target.classList.contains('trailer')){
            document.querySelector('watch-trailer').clear();
            showModal('trailer');
            const movieid = event.target.dataset.movieid;
            movieTrailer(movieid);
            
            
        }else if(event.target.classList.contains('detail')){
            document.querySelector('movie-detail').clear();
            showModal('detail');
            const movieid = event.target.dataset.movieid;
            movieDetail(movieid);
        }
    });

})