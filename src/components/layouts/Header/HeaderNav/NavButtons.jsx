/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';

export function scroll(className, block) {
  const section = document.querySelectorAll(`[class*=${className}]`);
  if (section.length > 0) {
    // eslint-disable-next-line operator-linebreak
    const headerHeight = document.querySelector(
      '[class*=headerWrapper]'
    ).offsetHeight;
    window.scrollTo({
      top: section[0].offsetTop - headerHeight,
      behavior: 'smooth',
      // eslint-disable-next-line comma-dangle
      block,
    });
  }
}

const NavButton = ({ icon, text, link, block, closeMenu }) => {
  const navigate = useNavigate();
  const [scrollAfterRedirect, setScrollAfterRedirect] = useState(false);

  useEffect(() => {
    if (scrollAfterRedirect) {
      setTimeout(() => {
        scroll(link, block);
        setScrollAfterRedirect(false);
      }, 500);
    }
  }, [scrollAfterRedirect, link, block]);

  const changePathAndScroll = () => {
    if (window.location.pathname === '/') {
      scroll(link, block);
      closeMenu();
    } else {
      navigate('/#top');
      setScrollAfterRedirect(true);
      closeMenu();
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
