import React, { useRef } from "react";
import "./Project.css";

const Project = () => {
  const projectList = [
    {
      title: "Voting System",
      desc: "A secure, user-friendly voting application built using PHP, MySQL, and React.",
      image: "https://static.vecteezy.com/system/resources/previews/010/942/363/non_2x/vote-voting-and-election-concept-on-virtual-screen-polling-ballot-online-elections-electronic-voting-technology-e-ballot-check-mark-closeup-finger-about-to-press-a-button-illustration-vector.jpg",
      demo: "#",
      github: "#",
    },
    {
      title: "Carwash System",
      desc: "A booking system for carwash services with scheduling and payments.",
      image: "https://www.legendautoservices.com/wp-content/uploads/2023/11/Car-wash-al-quoz-best.jpeg",
      demo: "#",
      github: "#",
    },
    {
      title: "Tourist Destination",
      desc: "A website showcasing tourist destinations with interactive maps and galleries.",
      image: "https://www.clubmahindra.com/blog/media/section_images/internatio-3c7708bf333b9cd.jpg",
      demo: "#",
      github: "#",
    },
    {
      title: "Inventory System",
      desc: "A simple CRUD inventory system created with Laravel and MySQL.",
      image: "https://www.indifi.com/blog/wp-content/uploads/2022/05/Inventory.jpeg",
      demo: "#",
      github: "#",
    },
  ];

  const scrollRef = useRef(null);

  const handleHover = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="project-section" id="projects">
      <div className="project-content">
        <h1 className="project-title">My Projects</h1>
        <p className="project-subtitle">Here are some of the works I built.</p>

        <div
          className="project-grid"
          ref={scrollRef}
        >
          {projectList.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onMouseEnter={() => handleHover("right")}
              onMouseLeave={() => handleHover("left")}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="project-buttons">
                <a href={project.demo} target="_blank" className="btn">Live Demo</a>
                <a href={project.github} target="_blank" className="btn-outline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
