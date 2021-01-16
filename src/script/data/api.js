import showNowPlaying from "../component/now-playing.js";
import showUpcoming from "../component/upcoming.js";
import showPopular from "../component/popular.js";

const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=3972fe62c1fecb0fec5a00350c83f10b&language=en-US";
const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=3972fe62c1fecb0fec5a00350c83f10b&language=en-US";
const POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=3972fe62c1fecb0fec5a00350c83f10b&language=en-US";

const getNowPlaying  = () => {
    fetch(NOW_PLAYING)
        .then(response => {
            return response.json();
        })
        .then(data => {
            showNowPlaying(data.results);
        })
        .catch(error => {
            showResponseMessage(error);
        });
}

const getUpcoming = ()=>{
    fetch(UPCOMING)
        .then(response => {
            return response.json();
        })
        .then(data => {
            showUpcoming(data.results);
        })
        .catch(error => {
            showResponseMessage(error);
        });
}

const getPopular = () =>{
    fetch(POPULAR)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            showPopular(data.results);
        })
        .catch(error =>{
            showResponseMessage(error);
        });
}

const showResponseMessage = (message = "Check your internet connection") => {
    console.log(message);
};

export {getNowPlaying, getPopular, getUpcoming};