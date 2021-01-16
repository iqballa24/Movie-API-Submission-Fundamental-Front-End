class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>

            .fa-search{
                color: #0c3454 ;
            }

            .search-container {
                max-width: 800px;
                width: 100%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 3px;
                border-radius: 28px;
                position: sticky;
                top: 10px;
                background-color: white;
                margin: 0px auto;
                display: block;
                -webkit-transition: 0.2s ease;
                transition: 0.2s ease;
                
            }
            .search-container:hover{
                border: 1.5px solid #0c3454;
            }

            .search-container > input {
                width: 80%;
                padding: inherit;
                font-size: inherit;
                text-align: center;
                border: 0;
            }

            .search-container > input:focus::placeholder {
                font-weight: bold;
            }

            .search-container >  input::placeholder {
                color: #0c3454;
                font-weight: normal;
            }

            .search-container > button {
                width: 19%;
                cursor: pointer;
                margin-left: auto;
                margin-right: 0 ;
                padding: 16px;
                border: 0;
                text-transform: uppercase;
                background-color: white;
                border-radius: inherit;
            }
            
            h1{
                color: #0c3454;
                text-align: center;
                width: 100%;
            }
            
            @media screen and (max-width: 763px){

                h1{
                    font-size: 20px;
                }

                .search-container >  input::placeholder {
                    font-size: 10px;
                }

            }

            @media screen and (max-width: 575.98px){
                
                .search-container > button{
                    width: 18%;
                }
            }

        </style>
        <h1>Find your favorite movie</h1>
        <div id="search-container" class="search-container">
            <input placeholder="Search movie by title .. " id="searchElement" type="search">
            <button id="searchButtonElement" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
        
    }
}

customElements.define("search-bar", SearchBar);