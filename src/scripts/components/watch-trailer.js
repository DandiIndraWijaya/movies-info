class WatchTrailer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(key = null){
        this._key = key;
        this.render();
    }

    checkVideo(){
        if(this._key != null){
            return true;
        }else {
            return false
        }
    }

    notAvailable() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                height: 100%;
                color: white;
            }
            h2 {
                margin-top: 100px;
            }
        </style>
        <center><h2>Video Trailer not Available</h2></center>`
    }

    stop(){
        const video = this.shadowDOM.querySelector('iframe')
        let iframeSrc = video.src;
        video.src = iframeSrc;
        
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
                width: 100%;
                height: 100%
            }
        </style>
        <iframe style=" width: 100%; height: 100%;" src="https://www.youtube.com/embed/${this._key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
}

customElements.define("watch-trailer", WatchTrailer);
