import { useState } from 'react';

import Container from '../Container/Container.jsx';
import Button from '../../UI/Button.jsx';

// eslint-disable-next-line import/no-unresolved
import ideas from '../../../assets/img/features/ideas-img.png';
// eslint-disable-next-line import/no-unresolved
import activity from '../../../assets/img/features/activity-img.png';
import styles from './Features.module.css';

const MainIdea = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsTextExpanded(!isTextExpanded);
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
            {/* <div
              className={`${styles['features-text']} ${
                styles['features-text-bottom']
              } ${isTextExpanded ? 'expanded' : ''}`}>
              <h3 className={styles['feature-title']}>
                Цілями діяльності Організації є
              </h3>
              <p className={styles['feature-text']}>
                Доступ кожної української дитини до книжок та підручників для
                навчання рідною мовою, незважаючи на місце їх тимчасового
                перебування.
              </p>
              {isTextExpanded && (
                <p className="expanded-text">
                  Надаючи кожній дитині книги та будь-яку літературу українською
                  мовою, можемо зберегти ідентичність нашої нації за межами
                  країни. Це особливо важливо для дітей, адже читання дає
                  відчуття безпеки та стабільності у стресових ситуаціях. Маємо
                  подбати про те, щоб українці у всіх куточках світу мали змогу
                  зберігати свою культурну ідентичність, зокрема й навчати своїх
                  дітей українською. Наша ціль забезпечити кожну дитину, що
                  через війну була вимушена виїхати за кордон, власною книжкою,
                  написаною рідною мовою. Для наших громадян доступ до
                  українських книжок є надзвичайно важливою підтримкою у
                  непростий воєнний час. Тому допомога дітям та їхнім родинам
                  отримати частинку свого дому в іншій країні є надзвичайно
                  важливою. Ми також пропонуємо будь-яку необхідну допомогу
                  дітям-біженцям з України, бо саме вони є майбутнім нашої
                  країни.
                </p>
              )}
              <Button
                onClick={handleButtonClick}
                className={styles['features-btn']}>
                {isTextExpanded ? 'Зменшити' : 'Збільшити'}
              </Button>
            </div>
            <div
              className={`${styles['features-img-wrapper']} ${styles['featuring-img-wrapper-float']}`}>
              <img src={activity} alt="Activity goals" />
            </div> */}
            <img className={styles['featuring-img-wrapper-float']} src={activity} alt="Activity goals" />
            <h3 className={styles['features-title']}>
                Цілями діяльності Організації є
              </h3>
          <p className={`${styles['features-text']} ${styles['features-text-float']}`}>
              Доступ кожної української дитини до книжок та підручників для
              навчання рідною мовою, незважаючи на місце їх тимчасового
              перебування. Надаючи кожній дитині книги та будь-яку літературу
              українською мовою, можемо зберегти ідентичність нашої нації за
              межами країни. Це особливо важливо для дітей, адже читання дає
              відчуття безпеки та стабільності у стресових ситуаціях. Маємо
              подбати про те, щоб українці у всіх куточках світу мали змогу
              зберігати свою культурну ідентичність, зокрема й навчати своїх
              дітей українською. Наша ціль забезпечити кожну дитину, що через
              війну була вимушена виїхати за кордон, власною книжкою, написаною
              рідною мовою. Для наших громадян доступ до українських книжок є
              надзвичайно важливою підтримкою у непростий воєнний час. Тому
              допомога дітям та їхнім родинам отримати частинку свого дому в
              іншій країні є надзвичайно важливою. Ми також пропонуємо будь-яку
              необхідну допомогу дітям-біженцям з України, бо саме вони є
              майбутнім нашої країни.
            </p>
            <Button
                onClick={handleButtonClick}
                className={styles['features-btn']}>
                {isTextExpanded ? 'Зменшити' : 'Збільшити'}
              </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainIdea;
