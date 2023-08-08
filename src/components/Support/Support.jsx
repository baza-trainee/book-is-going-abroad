/* eslint-disable max-len */
import SupportAccordion from './SupportAccordion/SupportAccordion.jsx';
import Container from '../layouts/Container/Container.jsx';

import styles from './Support.module.css';
import supportHeart from '../../assets/img/support/supportHeart.png';
import monobankIcon from '../../assets/img/support/monobankIcon.png';

const monobankImg = <img src={monobankIcon} alt="monobankIcon" />;

const accordionData = [
  {
    title: 'UAH',
    content1:
      'Найменування отримувача:\nБО МБФ ДОПОМОГА ДІТЯМ\nКод одержувача:\n44691208\nIBAN:\nUA683052990000026001030124624\nНазва банку:\nАТ КБ «ПриватБанк»',
    content2: ''
  },
  {
    title: 'EUR',
    content1: 'Найменування отримувача:\nБО МБФ ДОПОМОГА ДІТЯМ\nSWIFT:\nPBANUA2X\nIBAN:\nUA633052990000026000040127388\nНазва банку:\nАТ КБ «ПриватБанк», вул. Грушевсього, 1-\nД, Київ, 01001, Україна\nАдреса отримувача\n03067, Україна, Київ, вул. Олексія Тихого\n55/13, офіс 6',
    content2: ''
  },
  {
    title: 'БАНКИ КОРЕСПОНДЕНТИ',
    content1: 'Рахунок у банку-кореспонденті\n400886700401\nSWIFT:\nCOBADEFF\nБанк-кореспондент:\nCOMMERZBANK AG, FRANKFURT AM MAIN,\nGERMANY',
    content2: 'Найменування отримувача:\nБО МБФ ДОПОМОГА ДІТЯМ\nSWIFT:\nCHASDEFX\nБанк-кореспондент:\nJ.P.MORGAN AG, FRANKFURT AM MAIN,\nGERMANY'
  },
  {
    title: 'MONOBANK',
    content1: monobankImg
  }
];

const Support = () => (
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
            <h2 className={styles['support-title']}>Ваша поміч - цінна</h2>
            <p className={styles['support-paragraph']}>
              Ми щиро вдячні вам за вашу зацікавленість та бажання допомогти нам
              поліпшити життя дітей, які постраждали внаслідок конфлікту. Ваші
              донати відіграють надзвичайно важливу роль у нашій місії,
              спрямованій на забезпечення дітей необхідною допомогою та
              підтримкою, яка допоможе їм знайти надію та відновитися після
              травматичного досвіду війни.
            </p>
          </div>
        </div>
        <SupportAccordion sections={accordionData} />
      </div>
    </Container>
  </section>
);

export default Support;
