/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import React, { useState, useEffect, useContext } from 'react';
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
import Button from '../UI/Button.jsx';
import arrow from '../Features/features-arrow.svg';
import { TranslateContext } from '../../contexts/translate-context';

const Directions = () => {
  const { translate } = useContext(TranslateContext);
  const [showAllDirections, setShowAllDirections] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [arrowRotation, setArrowRotation] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const directionsRow1 = [
    {
      id: '1',
      icon: icon1,
      content: translate('directions.text1'),
      row: '__firstRow',
      style: 'one',
      num: '1',
      last: false,
      needToMove: true,
    },
    {
      id: 2,
      icon: icon2,
      content: translate('directions.text2'),
      row: '__firstRow',
      style: 'two',
      num: '2',
      last: false,
      needToMove: false,
    },
    {
      id: 3,
      icon: icon3,
      content: translate('directions.text3'),
      row: '__firstRow',
      style: 'three',
      num: '3',
      last: true,
      needToMove: false,
    },
  ];

  const directionsRow2 = [
    {
      id: 4,
      icon: icon4,
      content: translate('directions.text4'),
      row: '__secondRow',
      style: 'four',
      num: '4',
      last: false,
      needToMove: false,
    },
    {
      id: 5,
      icon: icon5,
      content: translate('directions.text5'),
      row: '__secondRow',
      style: 'five',
      num: '5',
      last: false,
      needToMove: false,
    },
    {
      id: 6,
      icon: icon6,
      // eslint-disable-next-line quotes
      content: translate('directions.text6'),
      row: '__secondRow',
      style: 'six',
      num: '6',
      last: true,
      needToMove: false,
    },
  ];

  const directionsRow3 = [
    {
      id: 7,
      icon: icon7,
      content: translate('directions.text7'),
      row: '__thirdRow',
      style: 'seven',
      num: '7',
      last: false,
      needToMove: false,
    },
    {
      id: 8,
      icon: icon8,
      content: translate('directions.text8'),
      row: '__thirdRow',
      style: 'eight',
      num: '8',
      last: false,
      needToMove: false,
    },
    {
      id: 9,
      icon: icon9,
      content: translate('directions.text9'),
      row: '__thirdRow',
      style: 'nine',
      num: '9',
      last: true,
      needToMove: false,
    },
  ];

  const directionsRow4 = [
    {
      id: 10,
      icon: icon10,
      content: translate('directions.text10'),
      row: '__fourthRow',
      style: 'ten',
      num: '10',
      last: false,
      needToMove: false,
    },
    {
      id: 11,
      icon: icon11,
      content: translate('directions.text11'),
      row: '__fourthRow',
      style: 'eleven',
      num: '11',
      last: false,
      needToMove: false,
    },
  ];

  const directionsRow5 = [
    {
      id: 12,
      icon: icon12,
      content: translate('directions.text12'),
      row: '__fifthRow',
      style: 'twelve',
      num: '12',
      last: false,
      needToMove: false,
    },
    {
      id: 13,
      icon: icon13,
      content: translate('directions.text13'),
      row: '__fifthRow',
      style: 'thirteen',
      num: '13',
      last: false,
      needToMove: false,
    },
    {
      id: 14,
      icon: icon14,
      content: translate('directions.text14'),
      row: '__fifthRow',
      style: 'fourteen',
      num: '14',
      last: true,
      needToMove: false,
    },
  ];

  const renderDirections1 = directionsRow1.map(
    ({ id, icon, content, row, style, num, last, needToMove }) => (
      <PopupIcon
        key={id}
        icon={icon}
        content={content}
        row={row}
        style={style}
        num={num}
        last={last}
        needToMove={needToMove}
      />
    )
  );
  const renderDirections2 = directionsRow2.map(
    ({ id, icon, content, row, style, num, last }) => (
      <PopupIcon
        key={id}
        icon={icon}
        content={content}
        row={row}
        style={style}
        num={num}
        last={last}
      />
    )
  );
  const renderDirections3 = directionsRow3.map(
    ({ id, icon, content, row, style, num, last }) => (
      <PopupIcon
        key={id}
        icon={icon}
        content={content}
        row={row}
        style={style}
        num={num}
        last={last}
      />
    )
  );
  const renderDirections4 = directionsRow4.map(
    ({ id, icon, content, row, style, num, last }) => (
      <PopupIcon
        key={id}
        icon={icon}
        content={content}
        row={row}
        style={style}
        num={num}
        last={last}
      />
    )
  );
  const renderDirections5 = directionsRow5.map(
    ({ id, icon, content, row, style, num, last, needToMove }) => (
      <PopupIcon
        key={id}
        icon={icon}
        content={content}
        row={row}
        style={style}
        num={num}
        last={last}
        needToMove={needToMove}
      />
    )
  );

  const toggleDirections = () => {
    setShowAllDirections(!showAllDirections);
    setArrowRotation((prevRotation) => prevRotation + 180);
  };

  return (
    <section className={styles.directionWrapper}>
      <Container className={styles.directionContainer}>
        <h2 className={styles.sectionTitle}>{translate('directions.title')}</h2>
        <div className={styles.iconsWrapper}>
          <div className={styles.listWrapper1} data-testid="row1">
            {renderDirections1}
          </div>
          {isMobile && (
            <>
              {showAllDirections ? (
                <>
                  <div className={styles.listWrapper2} data-testid="row2">
                    {renderDirections2}
                  </div>
                  <div className={styles.listWrapper3} data-testid="row3">
                    {renderDirections3}
                  </div>
                  <div className={styles.listWrapper4} data-testid="row4">
                    {renderDirections4}
                  </div>
                  <div className={styles.listWrapper5} data-testid="row5">
                    {renderDirections5}
                  </div>
                  <Button
                    onClick={toggleDirections}
                    className={styles.expandButton}>
                    {translate('features.reduce')}
                    <img
                      src={arrow}
                      alt="Arrow"
                      className={styles['features-arrow']}
                      style={{ transform: `rotate(${arrowRotation}deg)` }}
                    />
                  </Button>
                </>
              ) : (
                <Button
                  onClick={toggleDirections}
                  className={styles.expandButton}>
                  {translate('features.increase')}
                  <img
                    src={arrow}
                    alt="Arrow"
                    className={styles['features-arrow']}
                    style={{ transform: `rotate(${arrowRotation}deg)` }}
                  />
                </Button>
              )}
            </>
          )}
          {!isMobile && (
            <>
              <div className={styles.listWrapper2} data-testid="row2">
                {renderDirections2}
              </div>
              <div className={styles.listWrapper3} data-testid="row3">
                {renderDirections3}
              </div>
              <div className={styles.listWrapper4} data-testid="row4">
                {renderDirections4}
              </div>
              <div className={styles.listWrapper5} data-testid="row5">
                {renderDirections5}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Directions;
