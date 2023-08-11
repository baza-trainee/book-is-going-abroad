/* eslint-disable max-len */
import SupportAccordion from './SupportAccordion/SupportAccordion.jsx';
import Container from '../layouts/Container/Container.jsx';

import styles from './Support.module.css';
import supportHeart from '../../assets/img/support/supportHeart.png';
import monobankIcon from '../../assets/img/support/monobankIcon.png';

const accordionData1UAHContent1 = <p className={styles['accordion-description']}>Найменування отримувача:<br />БО МБФ ДОПОМОГА ДІТЯМ<br /><br />Код одержувача:<br />44691208<br /><br />IBAN:<br />UA683052990000026001030124624<br /><br />Назва банку:<br />АТ КБ «ПриватБанк»</p>;
const accordionData1BanksContent1 = <p className={styles['accordion-description']}>Рахунок у банку-кореспонденті<br />400886700401<br /><br />SWIFT:<br />COBADEFF<br /><br />Банк-кореспондент:<br />COMMERZBANK AG, FRANKFURT AM MAIN,<br />GERMANY</p>;
const accordionData1BanksContent2 = <p className={styles['accordion-description']}>Найменування отримувача:<br />БО МБФ ДОПОМОГА ДІТЯМ<br /><br />SWIFT:<br />CHASDEFX<br /><br />Банк-кореспондент:<br />J.P.MORGAN AG, FRANKFURT AM MAIN,<br />GERMANY</p>;
const accordionData2Content1 = <p className={styles['accordion-description']}>Найменування отримувача:<br />БО МБФ ДОПОМОГА ДІТЯМ<br /><br />SWIFT:<br />PBANUA2X<br /><br />IBAN:<br />UA633052990000026000040127388<br /><br />Назва банку:<br />АТ КБ «ПриватБанк», вул. Грушевсього, 1-<br />Д, Київ, 01001, Україна<br /><br />Адреса отримувача<br />03067, Україна, Київ, вул. Олексія Тихого<br />55/13, офіс 6</p>;
const monobankImg = <img className={styles['accordion-description-img']} src={monobankIcon} alt="monobankIcon" />;

const accordionData1 = [
  {
    title: 'UAH',
    content1: accordionData1UAHContent1,
    content2: ''
  },
  {
    title: 'БАНКИ КОРЕСПОНДЕНТИ',
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

// const accordionData1 = [
//   {
//     title: 'UAH',
//     content1: accordionData1Content1,
//     content2: ''
//   },
//   {
//     title: 'БАНКИ КОРЕСПОНДЕНТИ',
//     content1:
//       'Рахунок у банку-кореспонденті\n400886700401\nSWIFT:\nCOBADEFF\nБанк-кореспондент:\nCOMMERZBANK AG, FRANKFURT AM MAIN,\nGERMANY',
//     content2:
//       'Найменування отримувача:\nБО МБФ ДОПОМОГА ДІТЯМ\nSWIFT:\nCHASDEFX\nБанк-кореспондент:\nJ.P.MORGAN AG, FRANKFURT AM MAIN,\nGERMANY'
//   }
// ];

// const accordionData2 = [
//   {
//     title: 'EUR',
//     content1:
//       'Найменування отримувача:\nБО МБФ ДОПОМОГА ДІТЯМ\nSWIFT:\nPBANUA2X\nIBAN:\nUA633052990000026000040127388\nНазва банку:\nАТ КБ «ПриватБанк», вул. Грушевсього, 1-\nД, Київ, 01001, Україна\nАдреса отримувача\n03067, Україна, Київ, вул. Олексія Тихого\n55/13, офіс 6',
//     content2: ''
//   },
//   {
//     title: 'MONOBANK',
//     content1: monobankImg
//   }
// ];

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
        <div className={styles['support-accordion-wrapper']}>
          <SupportAccordion sections={accordionData1} />
          <SupportAccordion sections={accordionData2} />
        </div>
      </div>
    </Container>
  </section>
);

export default Support;
