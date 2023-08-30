import { useEffect, useState, useContext } from 'react';
import styles from './Hero.module.css';
import Container from '../layouts/Container/Container.jsx';
import Button from '../UI/Button.jsx';
import Hotline from './Hotline/hotline.jsx';
import Contact from './Contact/Contact.jsx';
import { scroll } from '../layouts/Header/HeaderNav/NavButtons.jsx';
import slide1 from '../../assets/img/hero-backgrounds/slider1.webp';
import slide2 from '../../assets/img/hero-backgrounds/slider2.webp';
import slide3 from '../../assets/img/hero-backgrounds/slider3.webp';
import { TranslateContext } from '../../contexts/translate-context';

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const { translate } = useContext(TranslateContext);
  const [backgroundSlide, setBackgroundSlide] = useState(slides[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (slideIndex + 1) % slides.length;
      setBackgroundSlide(slides[nextIndex]);
      setSlideIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundSlide})` }}>
      <div className={styles['hero-slider']}>
        <Container className={styles.container}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.heroTitle}>{translate('hero.title')}</h1>

            <h6 className={styles.heroTitleDescription}>
              {translate('hero.subtitle')}
            </h6>

            <Button
              className={styles.heroBtn}
              onClick={() => scroll('support', 'end')}>
              {translate('hero.donate')}
            </Button>

            <Hotline />

            <Contact />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
