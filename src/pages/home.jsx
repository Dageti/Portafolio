import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1>Hello, I'm Matías</h1>
          <h2>Full-Stack Developer</h2>
          <Link to="/projects" className="btn btn-dark">
            View My Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
