import { useState } from 'react';
import HeaderUpper from './HeaderUpper/HeaderUpper.jsx';
import HeaderNav from './HeaderNav/HeaderNav.jsx';

import styles from './Header.module.css';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <section className={styles.headerWrapper}>
      <HeaderUpper
        setBurgerActive={setBurgerActive}
        burgerActive={burgerActive}
      />
      <HeaderNav
        setBurgerActive={setBurgerActive}
        burgerActive={burgerActive}
      />
    </section>
  );
};

export default Header;
