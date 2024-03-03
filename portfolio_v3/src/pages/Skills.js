import { HTML, CSS, JavaScript, ReactJs, Python, CPLus, NodeJs, VueJs, Flask, AWS, SQL, MongoDB } from "../icons"
import "./Skills.css"
import "../images/ISO_C++_Logo.svg.png"

const Skills = () => {

    const logo = [
        {
            name:"HTML",
            icon:<HTML className="skill-img"/>
        },
        {
            name:"CSS",
            icon:<CSS className="skill-img"/>
        },
        {
            name:"JavaScript",
            icon:<JavaScript className="skill-img"/>
        },
        {
            name:"React.js",
            icon:<ReactJs className="skill-img"/>
        },
        {
            name:"Python",
            icon:<Python className="skill-img"/>
        },
        {
            name:"C++",
            icon:<CPLus className="skill-img"/>
        },
        {
            name:"Node.js",
            icon:<NodeJs className="skill-img"/>
        },
        {
            name:"Vue.js",
            icon:<VueJs className="skill-img"/>
        },
        {
            name:"Flask",
            icon:<Flask className="skill-img"/>
        },
        {
            name:"Express.js",
            icon:<NodeJs className="skill-img"/>
        },
        {
            name:"AWS",
            icon:<AWS className="skill-img"/>
        },
        {
            name:"SQL",
            icon:<SQL className="skill-img"/>
        },
        {
            name:"Mongo",
            icon:<MongoDB className="skill-img"/>
        },
    ]

    return(
        <div id="skills">
        <div>
            <div id="skills-font-layout">
                <p id="skills-font">SKILLS</p>
                <p id="skills-subfont">WHAT I CAN DO</p>
            </div>
            <div id="skills-layout">
                    {logo.map((skill, index) => (
                        <div className="skill-container" key={index}>
                            <div className="img_container">
                                {skill.icon}
                            </div>
                            <div className="skill_font_container">
                                <p className="skill">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    )
}

export default Skills