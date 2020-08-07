class ContainerInfo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.renderSearchInfo();
    }

    set keyword(keyword){
        this._keyword = keyword;
        this.renderSearchInfo();
    }

    set category(category){
        this._category = category;
        this.renderCategory();
    }

    clear(){
        this.shadowDOM.innerHTML = '';
    }

    renderCategory(){
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
                background-color: purple;
                color: grey;
                font-weight: bold;
            }
        </style>
        <p>
            ${this._category}
        </p>`
    }

    renderSearchInfo(){
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

customElements.define("container-info", ContainerInfo);
