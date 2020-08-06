class SearchInfo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set keyword(keyword){
        this._keyword = keyword;
        this.render();
    }

    clear(){
        this.shadowDOM.innerHTML = '';
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
            }

            p {
                color: white
            }

            i {
                text-decoration: underline
            }
        </style>
        <p>
            Search result for <i>${this._keyword}</i>
        </p>`
    }
}

customElements.define("search-info", SearchInfo);
