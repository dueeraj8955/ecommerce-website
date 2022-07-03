import React from "react";
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import ln from "../../../images/Linkedin.png"
import github from "../../../images/github.png"
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD MY APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE.</h1>
                <p>High Quality is first priority For You</p>

                <p>Copyrights 2022 &copy; Dheeraj Kumar Maurya</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Me</h4>
                <a href="https://www.linkedin.com/in/dheeraj-kumar-maurya-6344b520a/">
                <img src={ln} alt ="LinkedIn"/>
                </a>
                <a href="https://github.com/dueeraj8955">
                <img src ={github} alt="GitHub"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer