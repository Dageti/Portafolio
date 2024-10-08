import React from "react";
import Projectcard from "../components/projectcard.jsx";

const Projects = () => {
  const projects = [
    {
      title: "Authentication system using Python Flask + React",
      description:
        "Authentication sistem using signup, login, validation and logout via token",
      github: "https://github.com/Dageti/MR-auth-python-react-flask",
    },
    {
      title: "Star Wars rest API",
      description: "",
      github: "https://github.com/Dageti/MR-SW-restAPI",
    },
    {
      title: "To do list",
      description: " To do list using fetch to post/get data and create/delete users from an API",
      github: "https://github.com/Dageti/ToDoFetch-MR",
    },
    {
      title: "",
      description: "",
      github: "",
    },
    {
      title: "",
      description: "",
      github: "",
    },
    {
      title: "",
      description: "",
      github: "",
    },
  ];
  return (
    <>
      <div className="projects-page">
        <div className="container">
          <h2>My Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <Projectcard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
