/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header.module.css';
import logo from './Logo.svg';
import LangSelect from './LangSelect/LangSelect.jsx';

export default function HeaderUpper({ setBurgerActive, burgerActive }) {
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

      <p className={styles.headerTitle}>
        БЛАГОДІЙНА ОРГАНІЗАЦІЯ МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
        ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
      </p>

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
