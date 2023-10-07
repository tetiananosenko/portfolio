import { Link } from 'react-router-dom';
import SocialLinksWrapper from '../SocialLinksWrapper';
import styles from './index.module.css';

const Home = () =>  (
  <>
    <SocialLinksWrapper direction='column' />
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

export default Home;