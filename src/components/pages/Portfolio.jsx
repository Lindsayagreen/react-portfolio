// AboutMe.js
import React from "react";

const Portfolio = () => {
    const projects = [
        {
            name: 'Run Buddy',  
            description: 'A website that offers fitness training services.',
            link: 'link here',
            github: 'github link here',
            image: 'img here',
        },
        {
            name: 'Run Buddy',  
            description: 'A website that offers fitness training services.',
            link: 'link here',
            github: 'github link here',
            image: 'img here',
        },
        {
            name: 'Run Buddy',  
            description: 'A website that offers fitness training services.',
            link: 'link here',
            github: 'github link here',
            image: 'img here',
        },
        {
            name: 'Run Buddy',  
            description: 'A website that offers fitness training services.',
            link: 'link here',
            github: 'github link here',
            image: 'img here',
        },
    ]
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        fkgjhksdfjgksdfj
      </p>
      {projects.map((project) => (
        <div className="card" key={project.name}>
        <img src={project.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} className="btn btn-primary">demo app</a>
          <a href={project.github} className="btn btn-primary">github</a>
        </div>
      </div>
        ))}
    </div>
  );
};

export default Portfolio;

