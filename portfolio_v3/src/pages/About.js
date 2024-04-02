import "./About.css"
import aboutPicture from '../images/AboutPicture.jpeg'; 
import React, { useState, useEffect } from "react";



const About = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
                const { top } = aboutSection.getBoundingClientRect()
                const windowHeight = window.innerHeight;
                if (top < windowHeight * 0.5) {
                    setIsVisible(true)
                    window.removeEventListener("scroll", handleScroll)
                }
            }
        };

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
        <div id="about">
            <div id="about-layout">
                <div id="about_container" className={isVisible ? "visible" : "hidden"}>
                    <p id="about-font">ABOUT</p>
                    <p id="about-subfont">WHO I AM</p>
                    <p id="about-par">
                        Hi! I'm a <b>Full Stack Developer</b> with a passion for learning new things. I have experience
                        working
                        with a variety of programming languages and frameworks, including JavaScript, Python, C++, and more.
                        Whether it's working on complex algorithms or building sleek and responsive user interfaces, I love
                        tackling new challenges and creating innovative solutions.
                        <br />
                        <br />
                        In addition to my work as a software engineer, I have a range of hobbies and interests. I enjoy
                        playing the piano and working on cars, but my real passion lies in developing various computer
                        science programs. Whether it's building custom applications or experimenting with new coding
                        techniques, I'm always looking for new ways to expand my skills and knowledge.
                        <br />
                        <br />
                        Thanks for taking the time to learn a little bit about me and my work. If you'd like to learn more
                        about my experience or see some examples of my work, please feel free to explore my portfolio or get
                        in touch!
                    </p>
                </div>
                <div id="porfolio-pic-div">
                    <img id='portfolio-pic' className={isVisible ? "visible" : "hidden"} src={aboutPicture} alt="About"/>
                </div>
            </div>
        </div>
    )
}

export default About