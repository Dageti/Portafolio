import React from 'react';
import { useLocation } from 'react-router-dom'; 

const ProjectDetail = () => {
  const location = useLocation();
  const { title, description, mediaUrl } = location.state || {}; 

  return (
    <div className="project-detail-container">
      <div className="media-section">
        {mediaUrl ? (
          mediaUrl.includes('.mp4') ? (
            <video src={mediaUrl} controls autoPlay className="media"></video>
          ) : (
            <img src={mediaUrl} alt={title} className="media" />
          )
        ) : (
          <p>No media available for this project.</p>
        )}
      </div>
      <div className="details-section">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
