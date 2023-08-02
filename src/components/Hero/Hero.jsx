import styles from './Hero.module.css';
import Container from '../layouts/Container/Container.jsx';
import Button from '../UI/Button.jsx';
import Hotline from './Hotline/hotline.jsx';
import Contact from './Contact/Contact.jsx';

const Hero = () => (
  <section className={styles.hero}>
    <Container>
      <div className={styles.heroWrapper}>
        <h1 className={styles.heroTitle}>ПОРТАЛ ГУМАНІТАРНОЇ ДОПОМОГИ</h1>

        <h6 className={styles.heroTitleDescription}>
          Сайт для тих, хто допомогає Україні
        </h6>

        <Button className={styles.heroBtn}>Підтримати</Button>

        <Hotline />

        <Contact />
      </div>
    </Container>
  </section>
);

export default Hero;
