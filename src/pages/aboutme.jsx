import React from "react";
import "../css/aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1>{t("aboutme.title")}</h1>
      <p>{t("aboutme.p1")}</p>
      <p>{t("aboutme.p2")}</p>
      <p>{t("aboutme.p3")}</p>
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
