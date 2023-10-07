import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Modal = ({ setIsOpen, text, urlGithub, urlLiveLink }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <p>{text}</p>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Link to={urlGithub} target="_blank">
                <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                  Github
                </button>
              </Link>
              <Link to={urlLiveLink} target="_blank">
                <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                  Live Link
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Modal;
