import { upComing, movieTrailer } from './fetchData.js';

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

    // Kode saat mengklik tombol detail dan tombol trailer
    document.addEventListener('click',function (event) {
        if(event.target.classList.contains('trailer')){
            let modal = document.getElementById("modalId");
            const movieid = event.target.dataset.movieid;
            document.querySelector('.modal-content').innerHTML = 'loading';
            modal.style.display = "block";

            const span = document.getElementsByClassName("close-modal")[0];

            span.onclick = function() {
                const video = document.querySelector('iframe');
                let iframeSrc = video.src;
                video.src = iframeSrc;
                
                modal.style.display = "none";
            }
            
            movieTrailer(movieid);
            
        }
    });

})