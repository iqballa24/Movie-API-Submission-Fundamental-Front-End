const showUpcoming = (data) => {
    const listMovieElement = document.querySelector("#listUpComing");
    listMovieElement.innerHTML = "";

    data.forEach(movie => {
        listMovieElement.innerHTML += `
                <style>
                    #listUpComing{
                        overflow-x: hidden;
                        white-space: nowrap;
                        margin: 18px 50px 50px 50px;
                        justify-content: center;
                    }

                    #listUpComing::-webkit-scrollbar {
                        width: 13px;
                        height: 7px;
                    }

                    #listUpComing::-webkit-scrollbar-thumb {
                        background: rgba(90, 90, 90);
                        border-radius : 10px;
                    }

                    #listUpComing::-webkit-scrollbar-track {
                        background: rgba(0, 0, 0, 0.2);
                        border-radius : 10px;
                    }

                    @media screen and (min-width: 763px){
                        #listUpComing:hover{
                            overflow-x:scroll;
                        }
                    }

                    @media screen and (max-width: 763px){
                        #listUpComing{
                            overflow-x: scroll;
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
    $('#listUpComing').on('click', '.detail-info', function () {

        const options = { year: 'numeric', month: 'long', day: 'numeric' };

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
        })
    });
};

export default showUpcoming;