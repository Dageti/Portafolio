import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, description, githubLink, mediaURL }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

const handleViewDetails = () =>{
  navigate('/project-detail', {state: {title, description, githubLink, mediaURL}});
};
  return (
    <div className="card project-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <button onClick={handleViewDetails} className="btn btn-dark">
          View details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
