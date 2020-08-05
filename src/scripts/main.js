import { upComing, movieTrailer, movieDetail } from './fetchData.js';

document.addEventListener('DOMContentLoaded', () => {
    

    // Kode saat mengklik link pada nav
    const link = document.querySelectorAll('.nav-link');
    let textLink = document.querySelectorAll('.text-link');
    for ( let i = 0 ; i < link.length; i++){
        link[i].addEventListener('click', function (event) {
            event.preventDefault();

            // merubah warna text link pada nav
            textLink[0].classList.remove("aktif");
            textLink[1].classList.remove("aktif");
            textLink[2].classList.remove("aktif");
            textLink[i].classList.add("aktif");

            // Request data
            if(i == 0){
                upComing();
            }
        });
    }

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
                    const video = document.querySelector('iframe') || null;
                    if(video != null){
                        let iframeSrc = video.src;
                        video.src = iframeSrc;
                    }
                    
                    modal.style.display = "none";
                }) 
            }
            
    }

    // Kode saat mengklik tombol detail dan tombol trailer
    document.addEventListener('click',function (event) {
        if(event.target.classList.contains('trailer')){
            document.querySelector('.modal-trailer-content').innerHTML = ``;
            showModal('trailer');
            const movieid = event.target.dataset.movieid;
            movieTrailer(movieid);
            
            
        }else if(event.target.classList.contains('detail')){
            document.querySelector('movie-detail').delete();
            showModal('detail');
            const movieid = event.target.dataset.movieid;
            movieDetail(movieid);
        }
    });

})