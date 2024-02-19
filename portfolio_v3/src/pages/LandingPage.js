import BackgroundCircles from "../components/BackgroundCircles"
import "./LandingPage.css"

const LandingPage = () => {

    const title = "EDWARD YUABOV"
    return(
    <div id="landing">
        <div className="name_container">
            <div className="background_div">
                <BackgroundCircles/>
            </div>
            <span>EDWARD YUABOV</span>
            <div className="descrition">
                <span>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER</span>
            </div>
        </div>
    </div>
    )
}

export default LandingPage