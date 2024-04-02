import BackgroundCircles from "../components/BackgroundCircles"
import React, { useState, useEffect } from "react";
import "./LandingPage.css"
import Scroll from "../components/scroll";


const LandingPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 300); 
      
      return () => clearTimeout(timeout);
    }, []);

return(
    <div id="landing">
        <div id="name_container">
            <div className="background_div">
                <BackgroundCircles/>
            </div>
            <span>EDWARD YUABOV</span>
            <div id="descrition" className={isVisible ? "visible" : "hidden"}>
                <span>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER</span>
            </div>
            <div className="scroll_container">
                <Scroll/>
            </div>
        </div>
    </div>
    )
}

export default LandingPage