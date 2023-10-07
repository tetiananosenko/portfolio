import styles from './index.module.css';

const DetailsItem = ({label,value}) => (
  <div className={styles.wrapperText}>
    <p className={styles.textInfo}><span className={styles.span}>{label}:</span>{value}</p>
  </div>
)

export default DetailsItem;