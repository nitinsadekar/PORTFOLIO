import React from 'react'
import styles from "./Hero.module.css"
import heroImage from "../../../assets/Hero/heroImage.png"
const Hero = () => {
  return (<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi , I'm Nitin Sadekar</h1>
        <p className={styles.descrption}>a Computer Engineering graduate with expertise in a wide range of programming and web development skills. My background includes proficiency in C, C++, Python, and Java, as well as web technologies such as HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript. I have hands-on experience with React, NodeJS, ExpressJS, and both SQL and NoSQL databases like MongoDB. I’m excited about continuing to grow in the tech field and exploring new challenges.</p>
        <a href="mailto:nitinsadekar246@gmail.com" className={styles.contactBtn}>Contact Me</a>

    </div>
    <img src={heroImage} alt="hero image" className={styles.heroImage} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>);
};

export default Hero