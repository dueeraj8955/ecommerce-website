import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/d_heeraj";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography>Dheeraj Kumar Maurya</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Personal Project
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.linkedin.com/in/dheeraj-kumar-maurya-6344b520a/" target="blank">
              <LinkedInIcon className="linkedinsvgicon" />
            </a>

            <a href="https://github.com/dueeraj8955" target="blank">
              <GitHubIcon className="githubsvgicon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
