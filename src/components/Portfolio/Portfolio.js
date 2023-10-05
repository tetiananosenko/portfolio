import styles from './Portfolio.module.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PortfolioStart = () => {
  const cardsPortfolio = useSelector(select => select.cardsPortfolio);
  return (
    <>
      <div className={styles.wrapperText}>
        <p className={styles.text}>View my work</p>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.title}>Portfolio</h1>
        </div>
      </div>
      <div className={styles.articles}>
        {cardsPortfolio.map((card) => (
          <article key={card.id}>
            <div className={styles.wrapper}>
              <div className={styles.articleWrapper} >
                <figure className={styles.wrapperImg}>
                  <img src={`${process.env.PUBLIC_URL}/images/photo-${card.images}.png`}
                    alt={card.title} />
                </figure>
                <div className={styles.articleBody}>
                  <h2>{card.title}</h2>
                  <p className={styles.description}>In this section you can view my projects made with <span className={styles.span}>{card.title}</span></p>
                  <Link to={`/portfolio/${card.id}`}>
                    <span>Read more</span>
                    <AiOutlineArrowRight className={styles.icon} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default PortfolioStart;