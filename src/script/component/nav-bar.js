class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            *{
                margin: 0;
                padding: 5px;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #0c3454;
                font-size: inherit ;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            nav{
                display: flex;
                align-items: center;
                padding: 25px auto;
            }
            nav .logo{
                letter-spacing: 1px;
                margin-left: 30px;
                margin-right: 10px;
            }
            nav ul{
                display: flex;
                list-style: none;
                
            }
            nav ul li a{
                color: white;
                text-decoration: none;
            }

            .navbar {
                display: flex;
                justify-content: center;
                width: 100%;
                bottom: 0;
                overflow: hidden;
                position: fixed;
                visibility: hidden;
                background-color: #0c3454;
                border-radius: 10px 10px 0px 0px;
            }

            .navbar a {
                float: left;
                display: block;
                color: #f2f2f2;
                padding: 10px 16px;
                text-decoration: none;
            }

            @media screen and (max-width: 768px){

                nav{
                    display: none;
                }

                .navbar{
                    visibility: visible;
                }

                .navbar a {
                    font-size: 10px;
                }
            }

        </style>

        <div class="navbar">
            <a href="#popular">Popular</a>
            <a href="#nowPlaying">Now Playing</a>
            <a><strong>MovieDB</strong></a>
            <a href="#upcoming">Up Coming</a>
            <a href="#popular">Top Rate</a>
        </div>
         
        <nav>
            <div class="logo">
                <h1>MovieDB</h1>
            </div>
            <ul class="menu">
                <li><a href="#popular">Popular</a></li>
                <li><a href="#nowPlaying">Now playing</a></li>
                <li><a href="#upcoming">Up Coming</a></li>
            </ul>
        </nav>
        `;
        
    }
}

customElements.define("nav-bar", NavBar);