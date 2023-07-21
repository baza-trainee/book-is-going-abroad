import HeaderUpper from './HeaderUpper/HeaderUpper.jsx';
import HeaderNav from './HeaderNav/HeaderNav.jsx';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.headerWrapper}>
    <HeaderUpper />
    <HeaderNav />
  </div>
);

export default Header;
