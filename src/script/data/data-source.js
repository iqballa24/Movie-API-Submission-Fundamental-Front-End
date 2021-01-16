class DataSource{
    static searchMovie (keyword) {  
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3972fe62c1fecb0fec5a00350c83f10b&language=id&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.errors || responseJson.total_results == 0) {
                    return Promise.reject(`<h1>Judul ${keyword} tidak di temukan</h1>`);
                    
                } else{
                    return Promise.resolve(responseJson.results);
                }
            })
        }
    };

export default DataSource;