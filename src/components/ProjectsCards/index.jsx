import { LiveHelp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const ProjectsCards = ({ id, title, description, image, urlGithub, urlLiveLink }) => {

  return (
    <div className={styles.card}>
      <img src={`${process.env.PUBLIC_URL}/images/photo-${image}.png`}
        alt='self-portrait'
        className={styles.img} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Link to={urlGithub}>
            Github
          </Link>
          <Link to={urlLiveLink} target='_blank'>
            Livelink
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCards;