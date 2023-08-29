import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import { TranslateContext } from '../../../contexts/translate-context.js';
// eslint-disable-next-line import/extensions
import useWindowSize from '../useWindowSize.js';
import Button from '../../UI/Button.jsx';
import styles from './Slider.module.css';
import slide1 from '../../../assets/img/activity-slider/slide1.jpg';
import slide2 from '../../../assets/img/activity-slider/slide2.jpg';
import slide3 from '../../../assets/img/activity-slider/slide3.jpg';
import slide1Small from '../../../assets/img/activity-slider/slide1-small.jpg';
import slide2Small from '../../../assets/img/activity-slider/slide2-small.jpg';
import slide3Small from '../../../assets/img/activity-slider/slide3-small.jpg';
import arrowPrev from './arrow-prev.svg';
import arrowNext from './arrow-next.svg';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [slide1, slide2, slide3];
  const slidesSmall = [slide1Small, slide2Small, slide3Small];

  const { translate } = useContext(TranslateContext);

  const windowSize = useWindowSize();
  const { width } = windowSize;

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previouSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles['slider-container']}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeSlide ? `${styles.active}` : ''
            }`}>
            <img src={width > 769 ? slide : slidesSmall[index]} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className={styles['slider-arrows']}>
          <Button
            className={`${styles['slider-arrow-prev']}`}
            onClick={previouSlide}>
            <img src={arrowPrev} alt="Arrow prev" />
          </Button>
          <Button
            className={`${styles['slider-arrow-next']}`}
            onClick={nextSlide}>
            <img src={arrowNext} alt="Arrow next" />
          </Button>
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, btnIndex) => (
          <button
            key={btnIndex}
            className={`${styles.dot} ${
              btnIndex === activeSlide ? `${styles.active}` : ''
            }`}
            onClick={() => handleSlideChange(btnIndex)}
            aria-label="Slide"
          >Slide</button>
        ))}
      </div>
      <NavLink className={styles['slider-btn-link']} to="/gallery">
        <Button className={styles['slider-btn']}>{translate('activity.seeMore')}</Button>
      </NavLink>
    </div>
  );
};

export default Slider;
