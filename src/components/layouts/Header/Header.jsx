import { useState } from 'react';
import HeaderUpper from './HeaderUpper/HeaderUpper.jsx';
import HeaderNav from './HeaderNav/HeaderNav.jsx';
import styles from './Header.module.css';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <HeaderUpper
        setBurgerActive={setBurgerActive}
        burgerActive={burgerActive}
      />
      <HeaderNav burgerActive={burgerActive} />
    </div>
  );
};

export default Header;
