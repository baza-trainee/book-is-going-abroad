/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import { useContext } from 'react';
import { TranslateContext } from '../../../../contexts/translate-context';
import styles from '../Header.module.css';

import NavButton from './NavButtons.jsx';

export default function HeaderNav({ burgerActive, setBurgerActive }) {
  const { translate } = useContext(TranslateContext);

  const navButtonsArr = [
    {
      id: 1,
      text: translate('header.addresses'),
      link: 'address',
    },
    {
      id: 2,
      text: translate('header.activity'),
      link: 'activity',
    },
    {
      id: 3,
      text: translate('header.goalsProject'),
      link: 'features',
    },
    {
      id: 4,
      text: translate('header.partners'),
      link: 'partners',
    },
    // eslint-disable-next-line comma-dangle
    {
      id: 5,
      text: translate('header.contactUs'),
      link: 'feedback',
    },
  ];

  function toggleBurger() {
    setBurgerActive((prevState) => !prevState);
  }

  const RenderButtons = navButtonsArr.map(({ id, text, link }) => (
    <NavButton
      key={id}
      text={text}
      link={link}
      block="center"
      closeMenu={toggleBurger}
    />
  ));

  return (
    <nav
      className={`${styles.navWrapper} ${burgerActive ? styles.active : ''}`}>
      <div className={styles.navBtnWrapper}>{RenderButtons}</div>
      <div className={styles.close} onClick={toggleBurger}></div>
    </nav>
  );
}
