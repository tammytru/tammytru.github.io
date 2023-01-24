//referenced https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .sticky {
                position: sticky;
                position: -webkit-sticky;
                top: 0;
            }
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0.3em 1em;
                background-color: #EFE2D9;
                overflow: hidden;
            }
            li {
                float: right;
            }
            #navbar-title {
                font-size: 1.1em;
                padding: 1em 0.5em;
                margin: 0;
            }
            li a {
                display: block;
                color: black;
                text-align: center;
                padding: 1em 1.2em;
                text-decoration: none;
                font-size: 1.1em;
            }
        </style>
        <div class="sticky">
            <ul>
                <li style="float:left"><p id="navbar-title">tammytru</p></li>
                <li><a href=resume.html>resume</a></li>
                <li><a href=projects.html>projects</a></li>
                <li><a href=index.html>home</a></li>
                <!-- <li><a href=”/blog”>Blog</a></li> -->
            </ul>
        </div>
        `;
    }
}
window.customElements.define('navbar-element', NavBar);