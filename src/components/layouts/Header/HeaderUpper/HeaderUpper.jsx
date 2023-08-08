/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import styles from '../Header.module.css';
import logo from './Logo.svg';
import LangSelect from './LangSelect/LangSelect.jsx';

export default function HeaderUpper() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
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
