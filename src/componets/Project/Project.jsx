import React from 'react';
import styles from './Project.module.css';


const Project = () => {
  const projects = [
    {
      title: 'CryptoStats',
      description: 'CryptoStats is a responsive and interactive cryptocurrency tracking platform built with React and Vite. The application offers real-time and historical data visualization, featuring: React Development: Responsive UI with dynamic elements. Chart.js Integration: Real-time and historical data visualization. Modern UI/UX Design: CSS animations and gradient themes. Accurate Currency Formatting: Supports multiple currencies, including INR.',
      link: 'https://cryptostats-nitinsadekars-projects.vercel.app/',
      stack: ['React.js', 'Vite', 'React Router', 'CSS Modules','React Google Charts']
    },
    {
      title: 'DevShowcase',
      description: 'Personal portfolio website to showcase skills and projects,and achievements in web development and backend development.The website serves as comprehensive platform for potential employers and clients to view my work and understand my technical expertise. ',
      stack: ['React.js', 'Tailwind CSS', 'Css Modules']
    },
    {
        title: 'Weather-Website',
        description: 'Built an interactive weather application leverraging HTML,CSS for the frontend and javascript for backend also used Openweather API for realtime weather data.This Project demonstrates my expertise in creating user-centric web applications with seamless data integration and dynamic updates. ',        
        stack: ['HTML', 'CSS', 'Javascript','API'],
        link:'https://weather-nitinsadekars-projects.vercel.app',
      },
      {
        title: 'Drumify-kit',
        description: 'Drumify Kit is a fun and interactive virtual drum set built using vanilla HTML, CSS, and JavaScript. It allows users to play different drum sounds either by clicking on drum pads or by pressing keyboard keys mapped to specific sounds. The project is fully responsive and delivers a smooth, real-time musical experience directly in the browser. ',
        stack: ['HTML', 'CSS', 'Javascript'],
        link:'https://drumify-kit-nitinsadekars-projects.vercel.app',
      },
  ];

  return (
    <section id="Projects" className={styles.projectSection}>
  <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
              <a href={project.link} target="Projects" rel="noopener noreferrer" className={styles.projectLink}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
