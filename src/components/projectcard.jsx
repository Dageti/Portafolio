import React from "react";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ title, description, githubLink }) => {
  const { t } = useTranslation();
  return (
    <div className="card project-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          {t("projects.button")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
