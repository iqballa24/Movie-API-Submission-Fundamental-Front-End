const showPopular = (movies) => {
    const listMovieElement = document.querySelector("#listPopular");
    listMovieElement.innerHTML = "";

    movies.forEach(movie => {
        listMovieElement.innerHTML += `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .card-box{
                    display: inline-block;
                    overflow:hidden;
                    margin: 20px 10px;
                    height: 420px;
                    width: 300px;
                    border-radius: 20px;
                    -webkit-transition: 0.2s ease;
                    transition: 0.2s ease
                }

                .card-content{
                    margin: 20px 16px 16px 16px;
                    white-space: normal;
                }

                .checked{
                    color:orange;
                }

                .fan-art-movie {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                    border: 0.5px solid grey;
                    border-radius: 20px;
                    -webkit-transition: 0.4s ease;
                    transition: 0.4s ease;
                    cursor: pointer;
                }

                #listPopular{
                    overflow-x: hidden;
                    white-space: nowrap;
                    margin: 18px 50px;
                    justify-content: center;
                }

                #listPopular::-webkit-scrollbar {
                    width: 13px;
                    height: 7px;
                }

                #listPopular::-webkit-scrollbar-thumb {
                    background: rgba(90, 90, 90);
                    border-radius : 10px;
                }

                #listPopular::-webkit-scrollbar-track {
                    border-radius : 10px;
                    background: rgba(0, 0, 0, 0.1);
                }
                
 
                @media screen and (min-width: 763px){
                    #listPopular:hover{
                        overflow-x:scroll;
                    }

                    .fan-art-movie:hover{
                        -webkit-transform: scale(1.05);
                        transform: scale(1.05);
                    }
                }

                @media screen and (max-width: 763px){
                    #listPopular{
                        overflow-x: scroll;
                    }

                    .card-box{
                        height: 280px;
                        width: 270px;
                        margin: 10px;
                    }

                    .fan-art-movie {
                        max-height: 180px;
                    }
                }

                @media (max-width: 575.98px) { 
                    .card-box{
                        height: 270px;
                        width: 150px;
                    }
                }

            </style>
            <div class="card-box">
                <img class="fan-art-movie detail-info" src="https://image.tmdb.org/t/p/w500/`+ movie.poster_path + `" alt="Fan Art" data-toggle="modal" data-target="#exampleModal" 
                        data-id="${movie.id}">
                <div class="card-content">
                    <h5><strong>${movie.original_title}</strong></h5>
                    <p><span class="fa fa-star checked"></span> ${movie.vote_average} (${movie.vote_count})</p>
                </div>
            </div>`;
    });

    // Click to appear modal info
    $('#listPopular').on('click', '.detail-info', function () {

        const options = {  year: 'numeric', month: 'long', day: 'numeric' };

        $.ajax({
            url: `https://api.themoviedb.org/3/movie/` + $(this).data('id'),
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
                                    <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/`+ movie.backdrop_path + `" alt="Fan Art" width="100%">
                                    <li class="list-group-item"><h5><strong>${movie.original_title}</strong></h5></li>
                                    <li class="list-group-item"><h5><strong>Release Date</strong> : `+ new Date(movie.release_date).toLocaleString('en', options) + `</h5></li>
                                    <li class="list-group-item"><h5><strong>Duration</strong> : ${movie.runtime} minute</h5></li>
                                    <li class="list-group-item"><h5><strong>Overview</strong> : ${movie.overview}</h5></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        })
    });
    
};

export default showPopular;