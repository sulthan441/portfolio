import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://avatars.githubusercontent.com/u/108915684?v=4"
      : "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img src={img} alt="" />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          I am a Full Stack Web Developer with hands-on experience on both front-end
           and back-end technologies(MERN).
            I have developed 
          various projects by utilizing HTML, CSS, Javascript, React js , Redux, Express js, Node js, Mongo DB.
          <br /><br />
          I possess a proven ability to collaborate effectively with my peers.
          I have a strong work ethic and enjoy working closely with my team members
          to effectively manage workloads and take on additional responsibilities as needed.
          My passion for both personal growth and software development led me to attend
          a 500+ hour coding bootcamp to expand my knowledge of new technologies.
        </p>  
      </div>
    </div>
  );
};

export default About;
