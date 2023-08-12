/* eslint-disable comma-dangle */
import styles from '../Header.module.css';

import NavButton from './NavButtons.jsx';

export default function HeaderNav() {
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

  const RenderButtons = navButtonsArr.map(({ id, text, link }) => (
    <NavButton key={id} text={text} link={link} block="center" />
  ));

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navBtnWrapper}>{RenderButtons}</div>
    </nav>
  );
}
