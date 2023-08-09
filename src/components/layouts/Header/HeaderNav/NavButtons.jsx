/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../Header.module.css';

export function scroll(className, block) {
  const section = document.querySelectorAll(`[class*=${className}]`);
  if (section.length > 0) {
    section[0].scrollIntoView({ behavior: 'smooth', block });
  }
}

const NavButton = ({ icon, text, link, block }) => (
  <button className={styles.navBtn} onClick={() => scroll(link, block)}>
    {icon}
    <p className={styles.navBtnText}>{text}</p>
  </button>
);

export default NavButton;
