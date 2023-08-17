/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import styles from '../Header.module.css';

import NavButton from './NavButtons.jsx';

export default function HeaderNav({ burgerActive, setBurgerActive }) {
  const navButtonsArr = [
    {
      id: 1,
      text: 'Адреси',
      link: 'address',
    },
    {
      id: 2,
      text: 'Активності',
      link: 'activity',
    },
    {
      id: 3,
      text: 'Ціль проекту',
      link: 'features',
    },
    {
      id: 4,
      text: 'Партнери',
      link: 'partners',
    },
    // eslint-disable-next-line comma-dangle
    {
      id: 5,
      text: "Зв'язатися",
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
