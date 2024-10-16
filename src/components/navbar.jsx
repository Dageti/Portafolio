import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg  sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {t("navbar.brand")}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="btn langbtn"
                onClick={() =>
                  changeLanguage(i18n.language === "en" ? "es" : "en")
                }
              >
                {t("navbar.switch_language")}
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
              {t("navbar.projects")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              {t("navbar.about")}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/matias-rivas-gallardo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Dageti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
