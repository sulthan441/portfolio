import { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
        I am a highly motivated web developer with a passion for
         creating innovative and engaging web applications. One
          of my favorite aspects of this field is the diverse
           range of projects and the opportunity to continually
            learn and grow. If you are seeking a collaborative 
            and dedicated developer for your next project, please 
            do not hesitate to contact me at <br /><br /> <b> Gmail : mohammedsulthan441@gmail.com . </b> 

        </p> <br />
       
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}

        >

          <a
            href="tel:6300537467"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto: mohammedsulthan441@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com/mohamme17965838?t=iNKyZA3GSGeeQicUlzP8RQ&s=08"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/sulthan441"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-sulthan-605121229/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        © 2022
      </div>
    </footer>
  );
};

export default Contact;
