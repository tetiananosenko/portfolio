
import { clsx } from 'clsx';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import SocialLink from '../SocialLink';
import styles from './index.module.css';

const SocialLinksWrapper = ({direction}) => (
  <div className={direction === 'column' ? styles.wrapperIconsColumn : styles.wrapperIconsRow }>
    <SocialLink href='https://www.linkedin.com/in/tetiana-nosenko-ba350a274/' Icon={BsLinkedin} />
    <SocialLink href='https://github.com/tetiananosenko' Icon={BsGithub} />
    <SocialLink href='https://t.me/tat_vladimirovna' Icon={BsTelegram} />
  </div>
)

export default SocialLinksWrapper;