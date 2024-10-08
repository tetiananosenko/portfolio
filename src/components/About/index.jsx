import { Link } from 'react-router-dom';
import DetailsItem from '../DetailsItem';
import SectionTitle from '../SectionTitle';
import SocialLinksWrapper from '../SocialLinksWrapper';
import styles from './index.module.css';

const About = () => (
    <>
    <SectionTitle title='About me' text='Let me introduce myself' />
      <div className={styles.div}>
        <figure className={styles.wrapperImg}>
          <img src={`${process.env.PUBLIC_URL}/images/photo-author.png`}
            alt='self-portrait'
            className={styles.imgAbout} />
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
      <hr className={styles.border} />
      <div className={styles.divContact}>
        <div>
          <DetailsItem label='Name' value='Tetiana'/>
          <DetailsItem label='Location' value='Atlanta | GA | USA' />
          <Link to={`${process.env.PUBLIC_URL}/Tetiana_Nosenko_cv.pdf`} target="_blank" download className={styles.btn}>Download CV</Link>
        </div>
        <div>
          <DetailsItem label='Email' value='nosenkotetiana23@gmail.com' />  
          <DetailsItem label='Availability' value='Open to work' />  
            <SocialLinksWrapper direction='row'/>
            </div>
      </div>
    </>
  )

export default About;