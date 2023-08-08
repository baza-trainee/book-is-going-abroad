/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../Header.module.css';

const NavButton = ({ icon, text, link }) => {
  function scroll(className) {
    const section = document.querySelectorAll(`[class*=${className}]`);
    if (section.length > 0) {
      section[0].scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <button className={styles.navBtn} onClick={() => scroll(link)}>
      {icon}
      <p className={styles.navBtnText}>{text}</p>
    </button>
  );
};

export default NavButton;
