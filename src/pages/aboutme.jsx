import React from "react";

const Aboutme = () => {
  return (
    <>
      <div className="contact-page">
        <div className="container">
          <h2>About me</h2>
          <p>
            Hi, I'm a full-stack developer who has just started in this world. I
            am eager to keep learning how to create dynamic designs. I have
            experience in technologies like react, python and flask.
          </p>
        </div>
        <div className="container">
          <h2>contact me</h2>
          <p>
            Contact me via email at:
            <a href="mailto:mat500.600@gmail.com">mat500.600@gmail.com</a>
          </p>
          <p>or find me here:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/matias-rivas-gallardo/"
                target="_blank"
              >
                linkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Dageti" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
