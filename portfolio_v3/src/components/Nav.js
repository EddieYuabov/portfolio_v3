import "./Nav.css"
import { NavIcon } from "../icons"
import { useState } from "react"

const Nav = () => {
    
    const [isVisible, setIsVisible] = useState(false)

// const toggleMenu = () => {
//         setIsVisible(!isVisible);
//     };

    return(
        <nav id="nav">
            <div id="logo_layout">
                <div id="logo" onClick={() => document.getElementById('landing').scrollIntoView({ behavior: "smooth" })}>
                    <span>E</span>
                    <p>|</p><span>Y</span>
                </div>
            </div>
            <div className="nav_container">
                <div className="nav_icon">
                    <NavIcon className="icon" onClick={() => setIsVisible(!isVisible)}/>
                    {isVisible ? 
                    <div className="dropdown_container">
                        {console.log("works")}
                        <span onClick={() => document.getElementById('about').scrollIntoView({ behavior: "smooth" })}>ABOUT</span>
                    <span onClick={() => document.getElementById('skills').scrollIntoView({ behavior: "smooth" })}>SKILLS</span>
                    <span onClick={() => document.getElementById('projects').scrollIntoView({ behavior: "smooth" })}>EXPERIENCE</span>
                    <a href="https://docs.google.com/document/d/1DVT0-fNo3kYleiR-_dJPom5PQoEmey-wAqZJ0GNS3_4/edit?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <p>RESUME</p>
                    </a>
                    </div>
                    :null
                    }
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
            </div>
        </nav>
    )
}

export default Nav