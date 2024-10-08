import ProjectsCards from "../ProjectsCards";
import { useSelector } from "react-redux";
import styles from './index.module.css';
import SectionTitle from "../SectionTitle";

const Portfolio = () => {
  const cards = useSelector(state => state.cardsPortfolio)
  console.log(cards, 'cards')
  return (
    <>
    <SectionTitle title='Portfolio' text='View my work'/>
      <div className={styles.cardWrapper}>
        {cards.map(card => <ProjectsCards key={card.id} title={card.title} description={card.text} image={card.images} urlGithub={card.urlGithub} urlLiveLink={card.urlLiveLink} />)}
      </div>
    </>
  )
}

export default Portfolio;