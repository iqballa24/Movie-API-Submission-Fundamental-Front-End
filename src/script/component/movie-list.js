import './movie-item.js';

class MovieList extends HTMLElement {


    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie =>{
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }
            
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
        
    }
    
}

customElements.define("movie-list", MovieList);