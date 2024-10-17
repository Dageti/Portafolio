import React, { useEffect } from "react";
import Projectcard from "../components/projectcard.jsx";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "MR-auth-python-react-flask",
    description: "Authentication system built with Python Flask and React.",
    mediaUrl: "https://www.youtube.com/watch?v=AZuaEp106Fo",
    github: "https://github.com/Dageti/MR-auth-python-react-flask",
  },
  {
    title: "MR-SW-restAPI",
    description: "REST API built with Python Flask for Star Wars data.",
    github: "https://github.com/Dageti/MR-SW-restAPI",
  },
  {
    title: "Portafolio",
    description: "My personal portfolio built with JavaScript.",
    github: "https://github.com/Dageti/Portafolio",
  },
  {
    title: "ToDoFetch-MR",
    description: "To-do list app using JavaScript and API fetch.",
    mediaUrl: "https://www.youtube.com/watch?v=9ylcIps0Imw",
    github: "https://github.com/Dageti/ToDoFetch-MR",
  },
  {
    title: "MR-contactList",
    description: "Contact list app built with JavaScript.",
    mediaUrl: "https://www.youtube.com/watch?v=1cyPMmaEOqs",
    github: "https://github.com/Dageti/MR-contactList",
  },
  {
    title: "final-project-FT22-g2",
    description: "Final project for coding bootcamp using JavaScript.",
    mediaUrl: "",
    github: "https://github.com/Dageti/final-project-FT22-g2",
  },
  {
    title: "MR-exercise-unit-test-with-jest",
    description: "Unit testing practice using Jest.",
    mediaUrl: "",
    github: "https://github.com/Dageti/MR-exercise-unit-test-with-jest",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      <h1>{t("projects.pagetitle")}</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            description={project.description}
            mediaUrl={project.mediaUrl}
            githubLink={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
