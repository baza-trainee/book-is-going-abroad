import { useState, useRef, useEffect } from 'react';

import Container from '../Container/Container.jsx';
import Button from '../../UI/Button.jsx';

// eslint-disable-next-line import/no-unresolved
import ideas from '../../../assets/img/features/ideas-img.png';
// eslint-disable-next-line import/no-unresolved
import activity from '../../../assets/img/features/activity-img.png';
import styles from './Features.module.css';

const Features = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState('10em');

  // eslint-disable-next-line max-len
  const text = 'Доступ кожної української дитини до книжок та підручників для навчання рідною мовою, незважаючи на місце їх тимчасового перебування. Надаючи кожній дитині книги та будь-яку літературу українською мовою, можемо зберегти ідентичність нашої нації за межами країни. Це особливо важливо для дітей, адже читання дає відчуття безпеки та стабільності у стресових ситуаціях. Маємо подбати про те, щоб українці у всіх куточках світу мали змогу зберігати свою культурну ідентичність, зокрема й навчати своїх дітей українською. Наша ціль забезпечити кожну дитину, що через війну була вимушена виїхати за кордон, власною книжкою, написаною рідною мовою. Для наших громадян доступ до українських книжок є надзвичайно важливою підтримкою у непростий воєнний час. Тому допомога дітям та їхнім родинам отримати частинку свого дому в іншій країні є надзвичайно важливою. Ми також пропонуємо будь-яку необхідну допомогу дітям-біженцям з України, бо саме вони є майбутнім нашої країни.';

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(isTextExpanded ? `${textRef.current.scrollHeight}px` : '10em');
    }
  }, [isTextExpanded, text]);

  const handleButtonClick = () => {
    setIsTextExpanded((prevIsTextExpanded) => !prevIsTextExpanded);
  };

  return (
    <section className={styles.features}>
      <Container>
        <div className={styles['features-wrapper']}>
          <div className={styles['features-top']}>
            <div className={styles['features-img-wrapper']}>
              <img src={ideas} alt="Main ideas" />
            </div>
            <div
              className={`${styles['features-text-wrapper']} ${styles['features-text-top']}`}>
              <h3 className={styles['features-title']}>
                Головною ідеєю Організації є
              </h3>
              <p className={styles['features-text']}>
                Допомога постраждалим дітям-біженцям з України; надання допомоги
                громадянам, постраждалим внаслідок правових режимів
                надзвичайного чи воєнного стану
              </p>
            </div>
          </div>
          <div className={`${styles['features-bottom']}`}>
            <img
              className={styles['features-img-float']}
              src={activity}
              alt="Activity goals"
            />
            <h3
              className={`${styles['features-title']} ${styles['features-title-float']}`}>
              Цілями діяльності Організації є
            </h3>
            <p ref={textRef}
              className={`${styles['features-text']} ${styles['features-text-float']} `}
              style={{ maxHeight: textHeight, transition: 'all 2s ease' }}>
              {isTextExpanded ? text : `${text.slice(0, 132)}`}
            </p>
            <Button
              // eslint-disable-next-line no-lone-blocks, no-unused-expressions
              onClick={() => { handleButtonClick(); }}
              className={styles['features-btn']}>
              {isTextExpanded ? 'Зменшити' : 'Збільшити'}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
