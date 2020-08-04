import './the-movie.js';
 
class MoviesContainer extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set movie(movie) {
       this._movie = movie;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.shadowDOM.innerHTML = `
       <style>
           :host{
               display: flex;
               box-sizing: border-box;
            }
       </style>
       `;

       const theMovieElement = document.createElement("the-movie");
       theMovieElement.movie = this._movie;
       this.shadowDOM.appendChild(theMovieElement);
   }
}
 
customElements.define("movies-container", MoviesContainer);



