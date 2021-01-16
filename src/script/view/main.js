import '../component/movie-list.js';
import '../component/search-bar.js';
import {getNowPlaying, getUpcoming, getPopular} from '../data/api.js';
import DataSource from "../data/data-source.js";
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-List");

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
    };

    const renderResult = results => {
       movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    loadPage();
};

const loadPage = () =>{
    const xhr = new XMLHttpRequest();
    const content = document.querySelector("movie-list");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            getNowPlaying();
            getPopular();
            getUpcoming();
        }else if (xhr.status === 404){
            content.innerHTML = "<p>404 Page not found</p>";
        }else{
            getNowPlaying();
            getPopular();
            getUpcoming();
        }
    };

    xhr.open("GET", "index.html", true);
    xhr.send();
}

export default main;