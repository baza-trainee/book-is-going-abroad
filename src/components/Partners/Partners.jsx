/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import { useContext, useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './partners.module.css';
import Container from '../layouts/Container/Container.jsx';
import { TranslateContext } from '../../contexts/translate-context';

const Partners = () => {
  const { translate } = useContext(TranslateContext);
  const partnersLogoRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [partnersArray, setPartnersArray] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      axios
        .get('https://openbookhands.site/admin/api/v1/photologo/')
        .then((response) => {
          setPartnersArray(response.data);
          setDataLoaded(true);
        })
        .catch((error) => {
          console.error('Error fetching logo:', error);
        });
    }
  }, [dataLoaded]);

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

  const renderPartnersLogo = partnersArray.map((logo, index) => (
    <img
      key={index}
      alt={index}
      src={logo.image}
      className={`${styles.logo} ${
        index === partnersArray.length - 1 ? styles.lastLogo : ''
      }`}
    />
  ));

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
          {renderPartnersLogo}
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
