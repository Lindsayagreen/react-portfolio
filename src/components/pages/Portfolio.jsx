// AboutMe.js
import React from "react";
import "../../styles/Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Employee Tracker",
      description: "Using sql, a webpage that tracks employees, their roles and departments.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/sql-emp-tracker.git",
      image: "img here",
    },
    {
      name: "Readme Generator",
      description: "A wepage rthat generates a readme file for a project.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/professional-README-generator.git",
      image: "img here",
    },
    {
      name: "Weather Dashboard",
      description: "A website that offers fitness training services.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/professional-README-generator.git",
      image: "img here",
    },
    {
      name: "Portfolio using React",
      description: "A porfolio webpage using react.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/react-portfolio.git",
      image: "img here",
    },
    {
      name: "Texas Sports Blog",
      description: "A social media blog for users to add their posts about Texas sports.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/sportsblog-p2.git",
      image: "img here",
    },
    {
      name: "Backend Logo Generator",
      description: "A backend logo generator.",
      link: "link here",
      github: "https://github.com/Lindsayagreen/svg-logo.git",
      image: "img here",
    },
  ];
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <div className="card" key={project.name}>
          <img src={project.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            {/* <a href={project.link} className="btn btn-primary">
              demo app
            </a> */}
            <a href={project.github} className="btn btn-primary">
              github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
