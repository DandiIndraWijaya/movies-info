import {upComing} from './fetchData.js';

document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelectorAll('.nav-link');
    let textLink = document.querySelectorAll('.text-link');

    // Kode saat mengklik link pada nav
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
})