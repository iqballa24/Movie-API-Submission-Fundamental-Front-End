class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
             * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
            movie-item {
                margin: 18px auto;
                border-radius: 20px;
                overflow: hidden;
                heigth: 420px; 
                width: 300px;
            }

           movie-item .fan-art-movie {
                width: 100%;
                max-height: 290px;
                object-fit: cover;
                object-position: center;
            }
            movie-item .content {
                padding: 10px;
            }
           
            @media screen and (max-width:763px){
                movie-item{
                    height: 280px;
                    width: 270px;
                }

                movie-item .fan-art-movie {
                    max-height: 180px;
                }

                img{
                    width: 100%;
                }

            @media (max-width: 575.98px) { 
                movie-item{
                    height: 270px;
                    width: 150px;
                    margin: 5px;
                }

            }
                
            </style>
                <img class="fan-art-movie detail-info" src="https://image.tmdb.org/t/p/w500/`+ this._movie.poster_path + `" alt="Fan Art" data-toggle="modal" data-target="#exampleModal" 
                        data-id="${this._movie.id}">
                <div class="card-content">
                    <p><strong>${this._movie.original_title}</strong></p>
                    <p><span class="fa fa-star checked"></span> ${this._movie.vote_average} (${this._movie.vote_count})</p>
                </div>`;       

        $('movie-list').on('click', '.detail-info', function () {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            $.ajax({
                url: `https://api.themoviedb.org/3/movie/`+$(this).data('id'),
                dataType: 'json',
                data: {
                    'api_key': '3972fe62c1fecb0fec5a00350c83f10b',
                },
                success: function (movie) {
                    $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row justify-content-center no-gutters">
                                <div class="col">
                                    <ul class="list-group">
                                        <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/`+ movie.backdrop_path + `" alt="Fan Art" width="800px">
                                        <li class="list-group-item"><h5><strong>${movie.original_title}</strong></h5></li>
                                        <li class="list-group-item"><p><strong>Release Date</strong> : `+ new Date(movie.release_date).toLocaleString('en', options) + `</p></li>
                                        <li class="list-group-item"><p><strong>Duration</strong> : ${movie.runtime} minute</p></li>
                                        <li class="list-group-item"><p><strong>Overview</strong> : ${movie.overview}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `);
                }

            });
        });
    };
        
}
 
customElements.define("movie-item", MovieItem);