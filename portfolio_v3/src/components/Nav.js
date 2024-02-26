import "./Nav.css"
import { CloseNavIcon, NavIcon } from "../icons"
import { useState, useEffect} from "react"

const Nav = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let delayTimeout;
        if (isVisible) {
            delayTimeout = setTimeout(() => {
                setIsVisible(true);
                console.log("works")
            }, 1000)
        }
    
        return () => clearTimeout(delayTimeout);
    }, [isVisible]);

    const toggleMenu = () => {
        setIsVisible(prev => !prev)
    }
    
    const navID = `nav ${isVisible? `open` :null}`
    const optionsLayoutClass = `options_layout ${isVisible ? 'translate' : ''}`
    
    const bringToView = (target) => {
        document.getElementById(target).scrollIntoView({ behavior: "smooth" })
        setIsVisible(false)
    }

    return(
        <>
        {isVisible? 
            <nav className={navID}>
                                <div id="logo_layout">
                                    <div id="logo" onClick={() =>bringToView('landing')}>
                                        <span>E</span>
                                        <p>|</p><span>Y</span>
                                    </div>
                                </div>
                                <div className="dropdown_icon">
                                    <CloseNavIcon className="icon" onClick={() => toggleMenu()}/>
                                </div>
                            <div className={optionsLayoutClass}>
                                    <div className="centered_options">
                                        <span onClick={() => bringToView('about')}>ABOUT</span>
                                    </div>
                                <div className="centered_options">
                                    <span onClick={() => bringToView('skills')}>SKILLS</span>
                                </div>
                                <div className="centered_options">
                                    <span onClick={() => bringToView('projects')}>EXPERIENCE</span>
                                </div>
                                <div className="centered_options">
                                    <a href="https://docs.google.com/document/d/1DVT0-fNo3kYleiR-_dJPom5PQoEmey-wAqZJ0GNS3_4/edit?usp=sharing"
                                        target="_blank" rel="noopener noreferrer">
                                        <p>RESUME</p>
                                    </a>
                                </div>
                            </div>
                </nav>
                    :
                    <nav className={navID}>
                    <div id="logo_layout">
                        <div id="logo" onClick={() => document.getElementById('landing').scrollIntoView({ behavior: "smooth" })}>
                            <span>E</span>
                            <p>|</p><span>Y</span>
                        </div>
                    </div>
                    <div className="nav_container">
                        <div className="nav_icon">
                            <NavIcon className="icon" onClick={() => toggleMenu()}/>
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
                    }
                    </>
    )
}

export default Nav