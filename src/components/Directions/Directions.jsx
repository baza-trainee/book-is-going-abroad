/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import Container from '../layouts/Container/Container.jsx';
import PopupIcon from './PopupIcon/PopupIcon.jsx';
import icon1 from './PopupIcon/Group 1.png';
import icon2 from './PopupIcon/Group 2.png';
import icon3 from './PopupIcon/Group 3.png';
import icon4 from './PopupIcon/Group 4.png';
import icon5 from './PopupIcon/Group 5.png';
import icon6 from './PopupIcon/Group 6.png';
import icon7 from './PopupIcon/Group 7.png';
import icon8 from './PopupIcon/Group 8.png';
import icon9 from './PopupIcon/Group 9.png';
import icon10 from './PopupIcon/Group 10.png';
import icon11 from './PopupIcon/Group 11.png';
import icon12 from './PopupIcon/Group 12.png';
import icon13 from './PopupIcon/Group 13.png';
import icon14 from './PopupIcon/Group 14.png';
import styles from './Directions.module.css';

const Directions = () => {
  const text6 =
    'Створення обліку заявок від біженців на необхідну їм допомогу, та за можливістю виконання їх';

  const directionsRow1 = [
    {
      id: 1,
      icon: icon1,
      content:
        'Збір нової та вживаної дитячої літератури (книжок, журналів, учбової літератури) в Україні, доставка за межи країни та розповсюджування через дружні волонтерські організації дітям біженцям з України',
      row: '__firstRow',
    },
    {
      id: 2,
      icon: icon2,
      content:
        'Друк нових книг для дітей на українській мові, та передача цих книг дітям біженцям з України, які знаходяться в даний час за кордоном',
      row: '__firstRow',
    },
    {
      id: 3,
      icon: icon3,
      content:
        'Викуп нових книг зі складів, та книгарень для дітей на українській мові, та передача цих книг дітям біженцям з України, які знаходяться в даний час за кордоном',
      row: '__firstRow',
    },
  ];

  const directionsRow2 = [
    {
      id: 4,
      icon: icon4,
      content: 'Видавнича діяльність дитячої літератури',
      row: '__secondRow',
    },
    {
      id: 5,
      icon: icon5,
      content:
        'Створення власного логістичного транспорту доставки книжок за кордон, та саме доставка до маленьких місць, де на даний час знаходяться біженці з України',
      row: '__secondRow',
    },
    {
      id: 6,
      icon: icon6,
      // eslint-disable-next-line quotes
      content: text6,
      row: '__secondRow',
    },
  ];

  const directionsRow3 = [
    {
      id: 7,
      icon: icon7,
      content:
        'Психологічна підтримка книжкою рідною, українською мовою буде саме тим якорем, за який маленькі діти можуть вчепитися і мати його як частину звичного оточення, своєї Батьківщини',
      row: '__thirdRow',
    },
    {
      id: 8,
      icon: icon8,
      content: 'Забезпечити книжками кожного з маленьких дітей-переселенців',
      row: '__thirdRow',
    },
    {
      id: 9,
      icon: icon9,
      content:
        'Адресна допомога усім необхідним постраждалим переселенцям за межами країни та в Україні',
      row: '__thirdRow',
    },
  ];

  const directionsRow4 = [
    {
      id: 10,
      icon: icon10,
      content:
        'Створення пунктів допомоги на території України та за її межами для громадянам України постраждалих від військових дій',
      row: '__fourthRow',
    },
    {
      id: 11,
      icon: icon11,
      content:
        'Сприяння обороноздатності та мобілізаційній готовності країни, захисту населення у надзвичайних ситуаціях мирного і воєнного часу',
      row: '__fourthRow',
    },
  ];

  const directionsRow5 = [
    {
      id: 12,
      icon: icon12,
      content:
        'Сприяти створенню позитивного іміджу та репутації волонтерської діяльності у широкої громадськості, інвесторів, керівників організацій, органів державної влади України тощо',
      row: '__fifthRow',
    },
    {
      id: 13,
      icon: icon13,
      content:
        'Створення обмінного фонду книжок в місцях тимчасового мешкання українців за кордоном, де кожен українець, та дитина зможе поміняти прочитану книгу на іншу',
      row: '__fifthRow',
    },
    {
      id: 14,
      icon: icon14,
      content:
        'Надання допомоги громадянам, які постраждали внаслідок надзвичайної ситуації техногенного чи природного характеру, під час дії особливого періоду, правових режимів надзвичайного чи воєнного стану, здійснення заходів із забезпечення національної безпеки і оборони, біженцям, внутрішньо переміщеним особам',
      row: '__fifthRow',
    },
  ];

  const renderDirections1 = directionsRow1.map(({ id, icon, content, row }) => (
    <PopupIcon key={id} trigger={icon} content={content} row={row} />
  ));
  const renderDirections2 = directionsRow2.map(({ id, icon, content, row }) => (
    <PopupIcon key={id} trigger={icon} content={content} row={row} />
  ));
  const renderDirections3 = directionsRow3.map(({ id, icon, content, row }) => (
    <PopupIcon key={id} trigger={icon} content={content} row={row} />
  ));
  const renderDirections4 = directionsRow4.map(({ id, icon, content, row }) => (
    <PopupIcon key={id} trigger={icon} content={content} row={row} />
  ));
  const renderDirections5 = directionsRow5.map(({ id, icon, content, row }) => (
    <PopupIcon key={id} trigger={icon} content={content} row={row} />
  ));

  return (
    <section className={styles.directionWrapper}>
      <Container className={styles.directionContainer}>
        <h2 className={styles.sectionTitle}>Основні напрями діяльності</h2>
        <div className={styles.iconsWrapper}>
          <div className={styles.listWrapper1}>{renderDirections1}</div>
          <div className={styles.listWrapper2}>{renderDirections2}</div>
          <div className={styles.listWrapper3}>{renderDirections3}</div>
          <div className={styles.listWrapper4}>{renderDirections4}</div>
          <div className={styles.listWrapper5}>{renderDirections5}</div>
        </div>
      </Container>
    </section>
  );
};

export default Directions;
