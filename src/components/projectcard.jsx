import React from "react";


const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <div className="card project-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Repository
          </a>

      </div>
    </div>
  );
}

export default ProjectCard;