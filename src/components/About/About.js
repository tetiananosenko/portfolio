import styles from './About.module.css';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <div className={styles.wrapperDescription}>
        <p className={styles.text}>Let me introduce myself</p>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>About me</h1>
        </div>
      </div>
      <div className={styles.div}>
        <figure className={styles.wrapperImg}>
          <img src={`${process.env.PUBLIC_URL}/images/photo-author.png`}
            alt='self-portrait'
            className={styles.img} />
        </figure>
        <div className={styles.wrapper}>
          <h2>I'm a Frontend Developer who crafts amazing digital experiences!</h2>
          <p className={styles.description}>
            I am a hardworking and goal-oriented person with good organizational skills.
            I'm looking for a Frontend Developer position to consolidate the skills I've learned during self-study and 
            Frontend courses, as well as to gain experience working in a team and on real projects.
          </p>
        </div>
      </div>
      <p className={styles.border}></p>
      <div className={styles.divContact}>
        <div>
          <div className={styles.wrapperText}>
            <span className={styles.span}>Name:</span><p className={styles.textInfo}>Tetiana</p>
          </div>
          <div className={styles.wrapperText}>
            <span className={styles.span}>Location:</span><p className={styles.textInfo}>Atlanta | GA | USA</p>
          </div>
          <Link to={`${process.env.PUBLIC_URL}/Tetiana_Nosenko_cv.pdf`} target="_blank" download className={styles.btn}>Download CV</Link>
        </div>
        <div>
          <div className={styles.wrapperText}>
            <span className={styles.span}>Email:</span><p className={styles.textInfo}>nosenkotetiana23@gmail.com</p>
          </div>
          <div className={styles.wrapperText}>
            <span className={styles.span}>Availability:</span><p className={styles.textInfo}>Open to work</p>
          </div>
          <div className={styles.wrapperIcons}>
            <Link to={"https://www.linkedin.com/in/tetiana-nosenko-ba350a274/"} target="_blank">
              <BsLinkedin className={styles.icons} />
            </Link>
            <Link to={"https://github.com/tetiananosenko"} target="_blank">
              <BsGithub className={styles.icons} />
            </Link>
            <Link to={"https://t.me/tat_vladimirovna"} target="_blank">
              <BsTelegram className={styles.icons} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;