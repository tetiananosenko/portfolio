import styles from './index.module.css';

const SectionTitle = ({title, text}) => (
  <div className={styles.wrapperDescription}>
    <p className={styles.text}>{text}</p>
    <div className={styles.wrapperTitle}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  </div>
)

export default SectionTitle;