import "./Skills.css"

const Skills = () => {
    return(
        <div id="skills">
        <div>
            <div id="skills-font-layout">
                <p id="skills-font">SKILLS</p>
                <p id="skills-subfont">WHAT I CAN DO</p>
            </div>
            <div id="skills-layout">
                <div classNameName="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://cdn.worldvectorlogo.com/logos/html-1.svg" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">HTML</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://cdn.cdnlogo.com/logos/c/18/css.svg" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">CSS</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">JavaScript</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">React.js</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Python</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">C++</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Node.js</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Vue.js</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img'
                            src="https://cdn.freebiesupply.com/logos/large/2x/flask-logo-png-transparent.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Flask</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://oauth.net/images/code/nodejs.png" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Express.js</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://www.svgrepo.com/show/331300/aws.svg" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">AWS</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">SQL</p>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="img_container">
                        <img className='skill-img' src="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" />
                    </div>
                    <div className="skill_font_container">
                        <p className="skill">Mongo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills