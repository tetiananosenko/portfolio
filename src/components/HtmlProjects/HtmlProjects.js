import styles from './HtmlProjects.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';

/*
 TODO:
 1. Rename class
*/
const HtmlProjects = () => {
  const projects = useSelector((state) => (state.HtmlCssProjects));
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  return (
    <>
      <div className={styles.wrapperText}>
        <p className={styles.text}>View my work</p>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>Portfolio</h1>
        </div>
      </div>
      <div className={styles.articles}>
        {projects.map((project, index) =>
          <article>
            <div className={styles.wrapper}>
              <div className={styles.articleWrapper} >
                <figure className={styles.wrapperImg}>
                  <img src={`${process.env.PUBLIC_URL}/images/photo-${project.images}.png`}
                    alt={project.title} />
                </figure>
                <div className={styles.articleBody}>
                  <h2>{project.title}</h2>
                  <button className={styles.btnReadMore} onClick={() => {
                    setCurrentProjectIndex(index)
                    setIsOpen(true)
                  }
                  }>
                    <span>Read more</span>
                    <AiOutlineArrowRight className={styles.icon} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}
        {isOpen && <Modal setIsOpen={setIsOpen} text={projects[currentProjectIndex].text} urlGithub={projects[currentProjectIndex].urlGithub} urlLiveLink={projects[currentProjectIndex].urlLiveLink} />}
      </div>
    </>
  )
}

export default HtmlProjects;