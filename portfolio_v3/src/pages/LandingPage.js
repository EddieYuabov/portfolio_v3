import "./LandingPage.css"

const LandingPage = () => {
    const title = "EDWARD YUABOV"
    return(
        
        <div className="landing_page_container">
            <div className="name_container">
            <div className="background_div">
                <div className="slider-thumb-1"></div>
                <div className="slider-thumb-2"></div>
                <div className="slider-thumb-3"></div>
            </div>
                <span>{title}</span>
                <div className="descrition">
                    <span>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER</span>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage