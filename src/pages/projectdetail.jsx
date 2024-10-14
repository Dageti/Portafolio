import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { title, description, mediaUrl, githubLink } = location.state || {};

  return (
    <div className="project-detail-container">
      <div className="media-section">
        {mediaUrl ? (
          mediaUrl.includes(".mp4") ? (
            <video src={mediaUrl} controls autoPlay className="media"></video>
          ) : (
            <img src={mediaUrl} alt={title} className="media" />
          )
        ) : (
          <p>{t("projects.detail")}</p>
        )}
      </div>
      <div className="details-section">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="repo-btn">
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
    </div>
  );
};

export default ProjectDetail;
