import React from "react";
import styles from "./Skills.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const techIcons = [
    { icon: <FaHtml5 className={styles.html} />, name: "HTML5" },
    { icon: <FaCss3Alt className={styles.css} />, name: "CSS3" },
    { icon: <FaJsSquare className={styles.js} />, name: "JavaScript" },
    { icon: <SiTailwindcss className={styles.tailwind} />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className={styles.bootstrap} />, name: "Bootstrap" },
    { icon: <FaReact className={styles.react} />, name: "React" },
    { icon: <FaNodeJs className={styles.node} />, name: "Node.js" },
    { icon: <SiExpress className={styles.express} />, name: "Express" },
    { icon: <SiMongodb className={styles.mongo} />, name: "MongoDB" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.grid}>
        {techIcons.map((tech, index) => (
          <div key={index} className={styles.iconBox} title={tech.name}>
            <div className={styles.icon}>{tech.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
