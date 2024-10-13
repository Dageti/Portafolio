import React, { useEffect } from "react";
import Projectcard from "../components/projectcard.jsx";

const projects = [
  {
    title: "MR-auth-python-react-flask",
    description: "Authentication system built with Python Flask and React.",
    github: "https://github.com/Dageti/MR-auth-python-react-flask",
  },
  {
    title: "MR-SW-restAPI",
    description: "REST API built with Python Flask for Star Wars data.",
    github: "https://github.com/Dageti/MR-SW-restAPI",
  },
  {
    title: "MR-Instagram-bootstrap",
    description: "Instagram clone using Bootstrap.",
    github: "https://github.com/Dageti/MR-Instagram-boostrap",
  },
  {
    title: "html-hello",
    description: "Basic HTML project to start coding with HTML and CSS.",
    github: "https://github.com/Dageti/html-hello",
  },
  {
    title: "Fernando-Matias-exercise-collaborative-html-website",
    description:
      "Practice GIT by collaborating with others on building a landing page.",
    github:
      "https://github.com/Dageti/Fernando-Matias-exercise-collaborative-html-website",
  },
  {
    title: "MR-forms",
    description: "Form validation using HTML5.",
    github: "https://github.com/Dageti/MR-forms",
  },
  {
    title: "MatiasRivas-InstagramPost",
    description: "Instagram Post clone using HTML and CSS.",
    github: "https://github.com/Dageti/MatiasRivas-InstagramPost",
  },
  {
    title: "excuse-generator",
    description:
      "A fun project that generates random excuses using JavaScript.",
    github: "https://github.com/Dageti/excuse-generator",
  },
  {
    title: "bootstrap-exercises-tutorial",
    description: "Practice and learn Bootstrap with interactive tutorials.",
    github: "https://github.com/Dageti/bootstrap-exercises-tutorial",
  },
  {
    title: "exercise-postcard",
    description: "HTML/CSS exercise to create a postcard layout.",
    github: "https://github.com/Dageti/exercise-postcard",
  },
  {
    title: "Portafolio",
    description: "My personal portfolio built with JavaScript.",
    github: "https://github.com/Dageti/Portafolio",
  },
  {
    title: "mr-exercise-starwars-data-modeling",
    description: "Star Wars database modeling using SQLAlchemy.",
    github: "https://github.com/Dageti/mr-exercise-starwars-data-modeling",
  },
  {
    title: "exercise-instagram-data-modeling",
    description: "Data modeling for Instagram using UML.",
    github: "https://github.com/Dageti/exercise-instagram-data-modeling",
  },
  {
    title: "ToDoFetch-MR",
    description: "To-do list app using JavaScript and API fetch.",
    github: "https://github.com/Dageti/ToDoFetch-MR",
  },
  {
    title: "MR-contactList",
    description: "Contact list app built with JavaScript.",
    github: "https://github.com/Dageti/MR-contactList",
  },
  {
    title: "ToDoList-MR",
    description: "To-do list application built with JavaScript.",
    github: "https://github.com/Dageti/ToDoList-MR",
  },
  {
    title: "MR-audioPlayer",
    description: "Audio player application using JavaScript.",
    github: "https://github.com/Dageti/MR-audioPlayer",
  },
  {
    title: "MRTicTacToe",
    description: "Tic Tac Toe game built using JavaScript.",
    github: "https://github.com/Dageti/MRTicTacToe",
  },
  {
    title: "MR-simple-counter",
    description: "A simple counter application built with JavaScript.",
    github: "https://github.com/Dageti/MR-simple-counter",
  },
  {
    title: "MR-bubbleSort",
    description: "JavaScript project implementing the Bubble Sort algorithm.",
    github: "https://github.com/Dageti/MR-bubbleSort",
  },
  {
    title: "MR-Sorting-cards-with-Select",
    description: "Card sorting project using JavaScript.",
    github: "https://github.com/Dageti/MR-Sorting-cards-with-Select",
  },
  {
    title: "MR-html-form-validation",
    description: "HTML form validation using JavaScript.",
    github: "https://github.com/Dageti/MR-html-form-validation",
  },
  {
    title: "final-project-FT22-g2",
    description: "Final project for coding bootcamp using JavaScript.",
    github: "https://github.com/Dageti/final-project-FT22-g2",
  },
  {
    title: "MR-python-flask-api-tutorial",
    description: "Tutorial on building a Python Flask API.",
    github: "https://github.com/Dageti/MR-python-flask-api-tutorial",
  },
  {
    title: "MR-starwars-API",
    description: "Python API to handle Star Wars data.",
    github: "https://github.com/Dageti/MR-starwars-API",
  },
  {
    title: "python-beginner-programming-exercises",
    description: "Set of Python exercises for beginners.",
    github: "https://github.com/Dageti/python-beginner-programming-exercises",
  },
  {
    title: "MR-landing-page",
    description: "Landing page project built with JavaScript.",
    github: "https://github.com/Dageti/MR-landing-page",
  },
  {
    title: "MR-traffic_light",
    description: "Traffic light simulation built with JavaScript.",
    github: "https://github.com/Dageti/MR-traffic_light",
  },
  {
    title: "MR-random-card",
    description: "Random card generator using JavaScript.",
    github: "https://github.com/Dageti/MR-random-card",
  },
  {
    title: "MR-exercise-unit-test-with-jest",
    description: "Unit testing practice using Jest.",
    github: "https://github.com/Dageti/MR-exercise-unit-test-with-jest",
  },
  {
    title: "MatiasRivas-Domain-name-generator",
    description: "Domain name generator using JavaScript.",
    github: "https://github.com/Dageti/MatiasRivas-Domain-name-generator",
  },
  {
    title: "MR-forms_payment",
    description: "Payment forms built with HTML.",
    github: "https://github.com/Dageti/MR-forms_payment",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
