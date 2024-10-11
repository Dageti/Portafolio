import React from "react";
import Projectcard from "../components/projectcard.jsx";

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
    description:
      " To do list using fetch to post/get data and create/delete users from an API",
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

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
