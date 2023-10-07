import { Link } from 'react-router-dom';
import styles from './index.module.css';

const SocialLink = ({href, Icon}) => (
  <Link to={href} target="_blank">
    <Icon className={styles.icons} />
  </Link>
)

export default SocialLink;