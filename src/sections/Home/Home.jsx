import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>
            Hi, I'm <br /><span className="highlight">Deniel Paul</span>
          </h1>

          <h2>Full-Stack Developer</h2>

          <p>
            I’m a student exploring web development and creating simple,
            user-friendly apps.
          </p>

          <div className="home-buttons">
            <a href="/path-to-your-cv.pdf" download className="btn outline-red">
              Download CV
            </a>
          </div>
        </div>

        <div className="home-img">
          <img
            src="https://img.freepik.com/premium-psd/stylish-man-isolated-transparent-background_947007-12666.jpg?w=2000"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
