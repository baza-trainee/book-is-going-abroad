/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangSelect from './LangSelect/LangSelect.jsx';
import { TranslateContext } from '../../../../contexts/translate-context';
import styles from '../Header.module.css';
import logo from './Logo.svg';

export default function HeaderUpper({ setBurgerActive, burgerActive }) {
  const { translate } = useContext(TranslateContext);

  function handleLogoClick() {
    if (window.location.pathname === '/') {
      window.location.href = '/#top';
    } else {
      window.location.href = '/';
    }
  }

  function toggleBurger() {
    setBurgerActive((prevState) => !prevState);
  }

  return (
    <header className={styles.header}>
      <Link to="/" onClick={handleLogoClick} className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      <p className={styles.headerTitle}>{translate('orgName')}</p>

      <div
        className={`${styles.headerLanguage} ${
          burgerActive ? styles.active : ''
        }`}>
        <LangSelect />
      </div>

      <div
        className={`${styles.burger} ${burgerActive ? styles.active : ''}`}
        onClick={toggleBurger}>
        <span></span>
      </div>
    </header>
  );
}
