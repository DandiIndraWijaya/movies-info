class TheMovie extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            flex-basis: 25%;
            padding:0;
        }
        .card {
            margin: 5px auto;
            background-color: #242429;
            color: white;
            padding: 10px 10px;
        }
        
        .card:hover {
            outline: none !important;
            box-shadow: 0 0 60px #4c4c50;
        }

        .card > p {
            margin: 2px;
        }
        </style>
            <div class="card">
                <h6>${this._movie.title}</h6>
                <p>${this._movie.title}</p>
                <p>${this._movie.title}</p>
                <p>${this._movie.title}</p>
            </div>`;
    }
}

customElements.define("the-movie", TheMovie);