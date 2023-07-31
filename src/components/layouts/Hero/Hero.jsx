import styles from './Hero.module.css';
import Container from '../Container/Container.jsx';
import Button from '../../UI/Button.jsx';
import Hotline from './Hotline/hotline.jsx';
import Contact from './Contact/Contact.jsx';

const Hero = () => (
  <section className={styles.hero}>
    <Container>
      <div className={styles.heroWrapper}>
        <h2 className={styles.heroTitle}>ПОРТАЛ ГУМАНІТАРНОЇ ДОПОМОГИ</h2>

        <h3 className={styles.heroTitleDescription}>
          Сайт для тих, хто допомогає Україні
        </h3>

        <Button className={styles.heroBtn}>Підтримати</Button>

        <Hotline />

        <Contact />
      </div>
    </Container>
  </section>
);

export default Hero;
