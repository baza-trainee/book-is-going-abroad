/* eslint-disable comma-dangle */
import Container from '../layouts/Container/Container.jsx';
import PopupIcon from './PopupIcon/PopupIcon.jsx';
import icon1 from './PopupIcon/Group 1.png';
import styles from './Directions.module.css';

const Directions = () => {
  const directionsRow1 = [
    { id: 1, icon: icon1, content: 'text', row: '__firstRow' },
    { id: 2, icon: icon1, content: 'text', row: '__firstRow' },
    { id: 3, icon: icon1, content: 'text', row: '__firstRow' },
  ];

  const directionsRow2 = [
    { id: 4, icon: icon1, content: 'text', row: '__secondRow' },
    { id: 5, icon: icon1, content: 'text', row: '__secondRow' },
    { id: 6, icon: icon1, content: 'text', row: '__secondRow' },
  ];

  const directionsRow3 = [
    { id: 7, icon: icon1, content: 'text', row: '__thirdRow' },
    { id: 8, icon: icon1, content: 'text', row: '__thirdRow' },
    { id: 9, icon: icon1, content: 'text', row: '__thirdRow' },
  ];

  const directionsRow4 = [
    { id: 10, icon: icon1, content: 'text', row: '__fourthRow' },
    { id: 11, icon: icon1, content: 'text', row: '__fourthRow' },
  ];

  const directionsRow5 = [
    { id: 12, icon: icon1, content: 'text', row: '__fifthRow' },
    { id: 13, icon: icon1, content: 'text', row: '__fifthRow' },
    { id: 14, icon: icon1, content: 'text', row: '__fifthRow' },
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
    <section>
      <Container>
        <div className={styles.listWrapper1}>{renderDirections1}</div>
        <div className={styles.listWrapper2}>{renderDirections2}</div>
        <div className={styles.listWrapper3}>{renderDirections3}</div>
        <div className={styles.listWrapper4}>{renderDirections4}</div>
        <div className={styles.listWrapper5}>{renderDirections5}</div>
      </Container>
    </section>
  );
};

export default Directions;
