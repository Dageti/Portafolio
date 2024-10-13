import React from "react";
import "../css/aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am a junior full-stack developer with knowledge in HTML, CSS,
        JavaScript, React, Flask, and Python. I enjoy working on projects that
        allow me to improve my coding skills, especially in front-end
        development and API integration.
      </p>
      <p>
        I am continuously learning and expanding my expertise in full-stack
        development, with a focus on building responsive, user-friendly web
        applications.
      </p>
      <p>
        Feel free to reach out to me through my LinkedIn or check out my GitHub
        for more projects.
      </p>
      <div className="social-links">
        <a
          className="btn-linkedin"
          href="https://www.linkedin.com/in/matias-rivas-gallardo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          className="btn-github"
          href="https://github.com/Dageti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
