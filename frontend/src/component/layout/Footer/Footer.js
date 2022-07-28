import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is My first Priority</p>

        <p>Copyrights 2022 &copy; Dheeraj Kumar Maurya</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://github.com/dueeraj8955">
        <GitHubIcon className="githubfootericon" />
        </a>
        <a href="https://www.linkedin.com/in/dheeraj-kumar-maurya-6344b520a/" target="blank">
          <LinkedInIcon className="linkedinfootericon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
