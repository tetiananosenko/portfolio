import styles from './NavBar.module.css';
import { FaHouse } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.wrapperTitle}>
          <p className={styles.logo}>Te<span className={styles.colorWords}>ti</span>ana</p>
        </div>
        <div className={styles.navbar}>
          <Link to="/" className={styles.listItem}>
            <FaHouse />
            <span className={styles.listItemName}>Home</span>
          </Link>
          <Link to="/about" className={styles.listItem}>
            <BsFillPersonFill />
            <span className={styles.listItemName}>Profile</span>
          </Link>
          <Link to="/portfolio" className={styles.listItem}>
            <MdWork />
            <span className={styles.listItemName}>Portfolio</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
