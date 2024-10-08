import { Link } from 'react-router-dom';
import styles from './index.module.css';

const NoMatch = () => {
  return (
    <>
      <section className={styles.errorContainer}>
        <span className={styles.four}><span className={styles.screenReaderText}>4</span></span>
        <span className={styles.zero}><span className={styles.screenReaderText}>0</span></span>
        <span className={styles.four}><span className={styles.screenReaderText}>4</span></span>
      </section>
      <div className={styles.item}>
        <p className={styles.textNoMatch}>The page you are looking for might have been removed had it's name changed or is temporarily unavailable</p>
      </div>
      <div className={styles.linkContainer}>
        <Link to='/' className={styles.moreLink}>Go to homepage</Link>
      </div>
    </>
  )
}

export default NoMatch;