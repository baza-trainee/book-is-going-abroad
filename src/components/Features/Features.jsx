import { useState, useRef, useEffect, useContext } from 'react';

import Container from '../layouts/Container/Container.jsx';
import Button from '../UI/Button.jsx';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { TranslateContext } from '../../contexts/translate-context.js';

// eslint-disable-next-line import/no-unresolved
import ideas from '../../assets/img/features/ideas-img.png';
import ideasMobile from '../../assets/img/features/ideas-img-mobile.png';
// eslint-disable-next-line import/no-unresolved
import activity from '../../assets/img/features/activity-img.png';
import activityMobile from '../../assets/img/features/activity-img-mobile.png';
import arrow from './features-arrow.svg';
import styles from './Features.module.css';

const Features = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState('10em');
  const [arrowRotation, setArrowRotation] = useState(0);

  const { translate, currentLocale } = useContext(TranslateContext);

  // eslint-disable-next-line max-len
  const text = translate('features.mainActivityText');

  // eslint-disable-next-line no-nested-ternary
  const letters = currentLocale === 'ua' ? 132 : currentLocale === 'eng' ? 141 : currentLocale === 'de' ? 169 : null;

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(
        isTextExpanded ? `${textRef.current.scrollHeight}px` : ''
      );
    }
  }, [isTextExpanded, text]);

  const handleButtonClick = () => {
    setIsTextExpanded((prevIsTextExpanded) => !prevIsTextExpanded);
    setArrowRotation((prevRotation) => prevRotation + 180);
  };

  return (
    <section className={styles.features}>
      <Container>
        <div className={styles['features-wrapper']}>
          <div className={styles['features-top']}>
            <div className={styles['features-img-wrapper']}>
              <img
                className={styles['features-img']}
                src={ideas}
                alt="Main ideas"
              />
            </div>
            <div
              className={`${styles['features-text-wrapper']} ${styles['features-text-top']}`}>
              <h3 className={`${styles['features-title']} ${styles['features-title-top']}`}>
                {translate('features.mainIdea')}
              </h3>
              <img src={ideasMobile} alt="Main ideas"
              className={styles['features-img-mobile']} />
              <p className={styles['features-text']}>
              {translate('features.mainIdeaText')}
              </p>
            </div>
          </div>
          <div className={`${styles['features-bottom']}`}>
            <img
              className={`${styles['features-img-float']} ${styles['features-img']}`}
              src={activity}
              alt="Activity goals"
            />
            <img src={activityMobile} alt="Activity goals"
              className={styles['features-img-mobile']} />
            <h3
              className={`${styles['features-title']} ${styles['features-title-float']}`}>
              {translate('features.mainActivity')}
            </h3>
            <p
              ref={textRef}
              className={`${styles['features-text']} ${styles['features-text-float']} `}
              style={{ height: textHeight, transition: 'all 1s ease' }}>
              {isTextExpanded ? text : `${text.slice(0, letters)}`}
            </p>
            <Button
              // eslint-disable-next-line no-lone-blocks, no-unused-expressions
              onClick={() => {
                handleButtonClick();
              }}
              className={styles['features-btn']}>
              {isTextExpanded ? translate('features.reduce') : translate('features.increase')}
              <img src={arrow} alt='Arrow' className={styles['features-arrow']} style={{ transform: `rotate(${arrowRotation}deg)` }} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
