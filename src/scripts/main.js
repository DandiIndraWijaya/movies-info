import { upComing, topRated, popular, search, movieTrailer, movieDetail } from './fetchData.js';

document.addEventListener('DOMContentLoaded', () => {
    let textLink = document.querySelectorAll('.text-link');
    const searchInfo = document.querySelector('search-info');

    searchInfo.clear(); // Menghaspus informasi hasil pencarian
    textLink[0].classList.add('aktif');   // Memberi warna text link upcoming
    upComing();

    // Kode saat mengklik link pada nav
    const link = document.querySelectorAll('.nav-link');
    for ( let i = 0 ; i < link.length; i++){
        link[i].addEventListener('click', (event) => {
            event.preventDefault();

            searchInfo.clear(); // Menghaspus informasi hasil pencarian

            // merubah warna text link pada nav
            textLink[0].classList.remove("aktif");
            textLink[1].classList.remove("aktif");
            textLink[2].classList.remove("aktif");
            textLink[i].classList.add("aktif");

            document.querySelector('.movies-container').innerHTML = ``; // Menghapus list movie
            document.querySelector('loading-data').start(); // Menjalankan loading

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

        // Menghilangkan warna text link pada nav
        textLink[0].classList.remove("aktif");
        textLink[1].classList.remove("aktif");
        textLink[2].classList.remove("aktif");


        searchInfo.clear(); // Menghapus list movie
        const keyword = document.querySelector('#keyword').value;

        
        document.querySelector('.movies-container').innerHTML = ``;   // Menghapus list movie
        document.querySelector('loading-data').start();  // Menjalankan loading

        search(keyword); // Menampilkan data hasil pencarian
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

                    // Jika modal-trailer ditutup
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

            document.querySelector('watch-trailer').clear();  // Menghapus video trailer sebelumnya
            showModal('trailer');
            const movieid = event.target.dataset.movieid;   // Mengambil movie id
            movieTrailer(movieid);
            
            
        }else if(event.target.classList.contains('detail')){

            document.querySelector('movie-detail').clear();  // Menghapus movie detail sebelumnya
            showModal('detail');
            const movieid = event.target.dataset.movieid;   // Mengambil movie id
            movieDetail(movieid);
        }
    });

})