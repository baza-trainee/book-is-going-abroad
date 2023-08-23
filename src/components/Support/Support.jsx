/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { useContext } from 'react';
import SupportAccordion from './SupportAccordion/SupportAccordion.jsx';
import Container from '../layouts/Container/Container.jsx';
import { TranslateContext } from '../../contexts/translate-context';

import styles from './Support.module.css';
import supportHeart from '../../assets/img/support/supportHeart.png';
import monobankIcon from '../../assets/img/support/monobankIcon.png';

const Support = () => {
  const { translate } = useContext(TranslateContext);

  const accordionData1UAHContent1 = (
    <p className={styles['accordion-description-text']}>
      {translate('support.uah1')}
      <br />
      {translate('support.uah2')}
      <br />
      <br />
      {translate('support.uah3')}
      <br />
      44691208
      <br />
      <br />
      IBAN:
      <br />
      UA683052990000026001030124624
      <br />
      <br />
      {translate('support.uah4')}
      <br />
      {translate('support.uah5')}
    </p>
  );
  const accordionData1BanksContent1 = (
    <p className={styles['accordion-description-text']}>
      {translate('support.banks1')}
      <br />
      400886700401
      <br />
      <br />
      SWIFT:
      <br />
      COBADEFF
      <br />
      <br />
      {translate('support.banks2')}
      <br />
      COMMERZBANK AG, FRANKFURT AM MAIN,
      <br />
      GERMANY
    </p>
  );
  const accordionData1BanksContent2 = (
    <p className={styles['accordion-description-text']}>
      {translate('support.banks1')}
      <br />
      6231605145
      <br />
      <br />
      SWIFT:
      <br />
      CHASDEFX
      <br />
      <br />
      {translate('support.banks2')}
      <br />
      J.P.MORGAN AG, FRANKFURT AM MAIN,
      <br />
      GERMANY
    </p>
  );
  const accordionData2Content1 = (
    <p className={styles['accordion-description-text']}>
      {translate('support.eur1')}
      <br />
      {translate('support.eur2')}
      <br />
      <br />
      SWIFT:
      <br />
      PBANUA2X
      <br />
      <br />
      IBAN:
      <br />
      UA633052990000026000040127388
      <br />
      <br />
      {translate('support.eur3')}
      <br />
      {translate('support.eur4')}
      <br />
      {translate('support.eur5')}
      <br />
      <br />
      {translate('support.eur6')}
      <br />
      {translate('support.eur7')}
      <br />
      {translate('support.eur8')}
    </p>
  );
  const monobankImg = (
    <div className={styles['accordion-description-wrapper-img']}>
      <img
        className={styles['accordion-description-img']}
        src={monobankIcon}
        alt="monobankIcon"
      />
    </div>
  );

  const accordionData1 = [
    {
      title: 'UAH',
      content1: accordionData1UAHContent1,
      content2: ''
    },
    {
      title: translate('support.banks'),
      content1: accordionData1BanksContent1,
      content2: accordionData1BanksContent2
    }
  ];

  const accordionData2 = [
    {
      title: 'EUR',
      content1: accordionData2Content1,
      content2: ''
    },
    {
      title: 'MONOBANK',
      content1: monobankImg
    }
  ];

  return (
    <section className={styles.support}>
      <Container>
        <div className={styles['support-wrapper']}>
          <div className={styles['support-img-description']}>
            <img
              className={styles['support-img']}
              src={supportHeart}
              alt="heart"
            />
            <div className={styles['support-description']}>
              <h2 className={styles['support-title']}>
                {translate('support.title')}
              </h2>
              <p className={styles['support-paragraph']}>
              {translate('support.description')}
              </p>
            </div>
          </div>
          <div className={styles['support-accordion-wrapper']}>
            <SupportAccordion sections={accordionData1} />
            <SupportAccordion sections={accordionData2} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
