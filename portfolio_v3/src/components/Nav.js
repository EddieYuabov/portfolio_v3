import "./Nav.css"

const Nav = () => {
    return(
        <nav id="nav">
            <div id="logo_layout">
                <div id="logo" onClick={() => document.getElementById('landing').scrollIntoView({ behavior: "smooth" })}>
                    <span>E</span>
                    <p>|</p><span>Y</span>
                </div>
            </div>
            <div id="options_layout">
                <span onClick={() => document.getElementById('about').scrollIntoView({ behavior: "smooth" })}>ABOUT</span>
                <span onClick={() => document.getElementById('skills').scrollIntoView({ behavior: "smooth" })}>SKILLS</span>
                <span onClick={() => document.getElementById('projects').scrollIntoView({ behavior: "smooth" })}>EXPERIENCE</span>
                <a href="https://docs.google.com/document/d/1DVT0-fNo3kYleiR-_dJPom5PQoEmey-wAqZJ0GNS3_4/edit?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <p>RESUME</p>
                </a>
            </div>
        </nav>
    )
}

export default Nav