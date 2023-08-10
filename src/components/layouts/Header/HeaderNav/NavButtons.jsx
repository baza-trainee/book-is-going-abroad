/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';

export function scroll(className, block) {
  const section = document.querySelectorAll(`[class*=${className}]`);
  if (section.length > 0) {
    section[0].scrollIntoView({ behavior: 'smooth', block });
  }
}

const NavButton = ({ icon, text, link, block }) => {
  const navigate = useNavigate();
  const [scrollAfterRedirect, setScrollAfterRedirect] = useState(false);

  useEffect(() => {
    if (scrollAfterRedirect) {
      setTimeout(() => {
        scroll(link, block);
        setScrollAfterRedirect(false);
      }, 100);
    }
  }, [scrollAfterRedirect, link, block]);

  const changePathAndScroll = () => {
    if (window.location.pathname === '/') {
      scroll(link, block);
    } else {
      navigate('/#top');
      setScrollAfterRedirect(true);
    }
  };

  return (
    <button className={styles.navBtn} onClick={changePathAndScroll}>
      {icon}
      <p className={styles.navBtnText}>{text}</p>
    </button>
  );
};

export default NavButton;
