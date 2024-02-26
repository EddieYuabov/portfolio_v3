import "./Experience.css"

const Experience = () => {

    return(
        <div id="projects">
        <div id="websites-container">
            <div>
                <p id="projects-font">WEBSITES</p>
                <p id="projects-subfont">WHAT IVE WORKED ON</p>
            </div>
            <div id="websites-layout">
                <div className="website-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                General Asssembly
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer"
                                className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='blog-img'
                        src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/logo_1200_by_627-e2f4e80d2e8073fa1b8c0a2bb36f2d46.jpg" />
                </div>
                <div className="website-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                1UP
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://1up.ai/" target="_blank" rel="noopener noreferrer" className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='blackjack-img'
                        src="https://1up.ai/wp-content/uploads/1up_competitive_ai_banner_16_9.png" />
                </div>
            </div>
        </div>
        <div id="project-div">
            <div id="project-font-layout">
                <p id="projects-font">PROJECTS</p>
                <p id="projects-subfont">IN MY SPARE TIME</p>
            </div>
            <div id="projects-layout">
                <div className="project-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                The Hogwarts Project showcases an application that displays information about all the
                                fictional students
                                attending Hogwarts School of Witchcraft and Wizardry. This application is designed to
                                provide an
                                immersive and informative experience for Harry Potter fans who want to explore the world
                                of
                                Hogwarts in
                                a digital format.
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://salty-taiga-60643.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                                className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='hogwarts-img'
                        src="https://phantom-marca.unidadeditorial.es/f21a9f12a57a63c7ea4ee14e048aca9f/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/25/16746808818281.jpg" />
                </div>
                <div className="project-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                My MCU project showcases a comprehensive database of all the movies from the Marvel
                                Cinematic Universe
                                (MCU). The application displays information on each movie, including release dates,
                                runtime, and my
                                personal ratings. The application also features trailers for each movie, allowing users
                                to get a sneak
                                peek of the film before watching it.
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://mcu.herokuapp.com" target="_blank" rel="noopener noreferrer"
                                className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='marvel-img'
                        src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                </div>
                <div className="project-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                My virtual blackjack game offers an exciting and interactive virtual card game
                                experience. In this game,
                                a CPU deals cards to the player, and the objective is to have a deck of cards that has a
                                sum closest to
                                the number 21 without exceeding it. The game is designed to provide a challenging and
                                entertaining
                                experience for both novice and seasoned Blackjack players.
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://parallel-holiday.surge.sh/" target="_blank" rel="noopener noreferrer"
                                className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='blackjack-img' src="https://crescent.edu/uploads/editor/images/Blackjack.png" />
                </div>
                <div className="project-img-layout">
                    <div className="popup">
                        <div className="popup_text">
                            <p>
                                The Blog Project showcases a comprehensive blogging platform that allows users to share
                                their day-to-day
                                experiences with others. The website is built using modern web technologies, including
                                HTML, CSS, and
                                JavaScript. Node.js with Express for back-end development, and MongoDB with Mongoose for
                                data
                                management.
                            </p>
                        </div>
                        <div className="popup_button">
                            <a href="https://still-wave-91765.herokuapp.com" target="_blank" rel="noopener noreferrer"
                                className="button">
                                Go to Project
                            </a>
                        </div>
                    </div>
                    <img id='blog-img' src="https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Experience