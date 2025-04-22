import React from 'react'
import emailIcon from '../../../assets/emailIcon.png'
import linkedinIcon from '../../../assets/linkedinIcon.png'
import githubIcon from '../../../assets/githubIcon.png'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="email" />
          <a href="mailto:nitinsadekar246@outlook.com">nitinsadekar246@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="linkedin" />
          <a href="https://www.linkedin.com/in/nitin-sadekar-653bb2229" target="_blank" rel="noopener noreferrer">linkedin.com/nitin-sadekar</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="github" />
          <a href="https://github.com/nitinsadekar" target="_blank" rel="noopener noreferrer">GitHub.com/nitinsadekar</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
