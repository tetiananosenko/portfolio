import { Link } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navigation}>
    <div className={styles.wrapperTitle}>
      {/* TODO: replace with a href='/' */}
      <p className={styles.logo}>Te<span className={styles.colorWords}>ti</span>ana</p>
    </div>
    <div className={styles.navbar}>
      {/* TODO: create NavBarLink */}
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
);

export default NavBar;
