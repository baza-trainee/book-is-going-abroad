/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { Link } from 'react-router-dom';
import styles from '../Header.module.css';
import logo from './Logo.svg';
import LangSelect from './LangSelect/LangSelect.jsx';

export default function HeaderUpper() {
  function handleLogoClick() {
    if (window.location.pathname === '/') {
      window.location.href = '/#top';
    } else {
      window.location.href = '/';
    }
  }

  return (
    <header className={styles.header}>
      <Link to="/" onClick={handleLogoClick}>
        <img src={logo} alt="logo" />
      </Link>

      <p className={styles.headerTitle}>
        БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
        ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
      </p>

      <div className={styles.headerLanguage}>
        <LangSelect />
      </div>
    </header>
  );
}
