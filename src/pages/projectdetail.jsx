import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { title, description, mediaUrl, githubLink } = location.state || {};

  const convertToEmbedUrl = (url) => {
    console.log("URL original:", url);
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }
    return url;
  };

  return (
    <div className="project-detail-container">
      <div className="media-section">
        {mediaUrl ? (
          <iframe
            className="media"
            width="560"
            height="315"
            src={convertToEmbedUrl(mediaUrl)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>{t("projects.detail")}</p>
        )}
      </div>
      <div className="details-section">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="repo-btn">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              {t("projects.button")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
