import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Big Int in C',
      description: 'In this project we have calculated value of pi upto 1000 decimal places.',
      link: 'https://github.com/TheViking733n/BigInt_in_C'
    },
    {
      title: 'Risc-V Simulator',
      description: 'In this we have made a risc-v simulator which show working of assembly language.',
      link: 'https://github.com/TheViking733n/RISC-V-Simulator'
    },
    {
      title: 'Betawill.com',
      description: 'This is a website made for our client',
      link: 'https://betawill.com'
    },
    {
      title: 'MetaMask Test Ether sender',
      description: 'My this website is used to send test ethers using web3 js library',
      link: 'https://metamask-frontend.onrender.com/  '
    },

  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
