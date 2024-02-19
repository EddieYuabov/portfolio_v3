import "./About.css"

const About = () => {
    return(
        <div id="about">
        <div id="about-layout">
            <div class="about_container">
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
                <img id='portfolio-pic' src="https://i.postimg.cc/9Fdj3m2V/portfolio-pic.jpg" alt="hello" />
            </div>
        </div>
    </div>
    )
}

export default About