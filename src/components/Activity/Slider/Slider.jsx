import { useState } from 'react';
import Button from '../../UI/Button.jsx';
import styles from './Slider.module.css';
import slide1 from '../../../assets/img/activity-slider/slide1.jpg';
import slide2 from '../../../assets/img/activity-slider/slide2.jpg';
import slide3 from '../../../assets/img/activity-slider/slide3.jpg';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
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
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, btnIndex) => (
          <button
            key={btnIndex}
            className={`${styles.dot} ${
              btnIndex === activeSlide ? `${styles.active}` : ''
            }`}
            onClick={() => handleSlideChange(btnIndex)}
          />
        ))}
      </div>
      <Button className={styles['slider-btn']}>Переглянути</Button>
    </div>
  );
};

export default Slider;
