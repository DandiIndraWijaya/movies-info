class LoadingData extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    stop(){
        this.shadowDOM.querySelector('svg').style.display = 'none'
    }

    start(){
        this.shadowDOM.querySelector('svg').style.display = 'block'
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
            svg{
                position: relative;
                width: 150px;
                height: 150px;
                animation: rotate 2s linear infinite;
            }
            
            svg circle{
                width: 20%;
                height: 20%;
                fill: none;
                stroke-width: 10;
                stroke: purple;
                stroke-linecap: round;
                transform: translate(5px, 5px);
                stroke-dasharray: 220;
                stroke-dashoffset: 220;
                animation: animate 2s linear infinite;
            }
            
            @keyframes animate{
                0%, 100%
                {
                    stroke-dashoffset: 440;
                }
                50%
                {
                    stroke-dashoffset: 0;
                }
                50.1%
                {
                    stroke-dashoffset: 880;
                }
            }
        </style>
        <center>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
        </center>`
    }
}

customElements.define("loading-data", LoadingData);
