import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';



const Home = () => {
  return (
    <>
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
      <div>
        <p className={styles.titleFirstName}>Te<span className={styles.colorWords}>ti</span>ana</p>
        <p className={styles.titleSurname}>Nosenko</p>
        <p className={styles.text}>Junior Frontend Developer</p>
      </div>
      <div className={styles.wrapperText}>
        <p>Skilled Frontend Developer specializes in HTML, CSS, JavaScript and React.js.
          Invite you to look at my works and skills!
        </p>
      </div>
      <Link to='/about' className={styles.btn}>Learn more</Link>
      <div className={styles.wrapperImg}>
        <img src={`${process.env.PUBLIC_URL}/images/photo-avatar.png`}
          alt='self-portrait'
          className={styles.img} />
      </div>
    </>
  )
}

export default Home;