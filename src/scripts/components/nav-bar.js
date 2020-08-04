class AppBar extends HTMLElement {
    // constructor() {
    //     super();
    //     this.shadowDOM = this.attachShadow({mode: "open"});
    // }

    connectedCallback(){

        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href=""><font class="text-link">Upcoming</font></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><font class="text-link">Top Rated</font></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><font class="text-link">Popular</font></a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>`
    }
}

customElements.define("nav-bar", AppBar);
