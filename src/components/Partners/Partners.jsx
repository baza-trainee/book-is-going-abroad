/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import { useContext, useRef, useState } from 'react';
import styles from './partners.module.css';
import Container from '../layouts/Container/Container.jsx';
import logo1 from './Logo 1.svg';
import { TranslateContext } from '../../contexts/translate-context';

const Partners = () => {
  const { translate } = useContext(TranslateContext);
  const partnersLogoRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const element = partnersLogoRef.current;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    const scrolled = element.scrollLeft;
    const percentage = (scrolled / maxScrollLeft) * 100;
    setScrollPercentage(percentage);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - partnersLogoRef.current.offsetLeft);
    setScrollLeft(partnersLogoRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - partnersLogoRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    partnersLogoRef.current.scrollLeft = scrollLeft - walk;
  };

  const partnerLogos = [
    { alt: 'Partner-1', src: logo1 },
    { alt: 'Partner-2', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
    { alt: 'Partner-3', src: logo1 },
  ];

  return (
    <section className={styles.partners}>
      <Container className={styles.container}>
        <h2 className={styles.partnersTitle}>{translate('partners.title')}</h2>
        <div
          className={styles.partnersLogoWrapper}
          ref={partnersLogoRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}>
          {partnerLogos.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className={`${styles.logo} ${
                index === partnerLogos.length - 1 ? styles.lastLogo : ''
              }`}
            />
          ))}
        </div>
        <div className={styles.scrollIndicator}>
          <div
            className={styles.scrollIndicatorFill}
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      </Container>
    </section>
  );
};

export default Partners;
