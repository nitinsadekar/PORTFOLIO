import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../../assets/About/aboutImage.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.textContent}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.description}>
          I'm Nitin Sadekar, a recent BTech graduate in Computer Engineering from
          Karmyogi Institute of Technology (2024), and a Diploma holder from
          Government Polytechnic, Osmanabad. My education has equipped me with
          skills in C, C++, Python, Java, HTML, CSS, Tailwind CSS, Bootstrap,
          JavaScript, React, NodeJS, ExpressJS, SQL, and NoSQL (MongoDB). I have
          experience in web development and software engineering, working on
          projects that enhanced my problem-solving abilities and time management
          skills. My volunteering experiences have also enriched my team
          collaboration and leadership skills. I am passionate about innovative
          web solutions and continually enhancing my skills. Thank you for
          visiting my portfolio!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="About Nitin Sadekar" />
      </div>
    </section>
  );
};

export default About;
