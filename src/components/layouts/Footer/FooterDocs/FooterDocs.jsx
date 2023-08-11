// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterDocsItem from './FooterDocsItem/FooterDocsItem.jsx';

import styles from './FooterDocs.module.css';

const docsNameArray = [
  { id: 1, text: 'Статут' },
  { id: 2, text: 'Політика Конфіденційності' },
  { id: 3, text: 'Умови Використання Сайту' }
];

const linkToAddress = 'address';
const blockCenter = 'center';

export function scroll(className, block) {
  const section = document.querySelectorAll(`[class*=${className}]`);
  if (section.length > 0) {
    section[0].scrollIntoView({ behavior: 'smooth', block });
  }
}

const FooterDocs = () => {
  const navigate = useNavigate();
  const [scrollAfterRedirect, setScrollAfterRedirect] = useState(false);

  useEffect(() => {
    if (scrollAfterRedirect) {
      setTimeout(() => {
        scroll(linkToAddress, blockCenter);
        setScrollAfterRedirect(false);
      }, 100);
    }
  }, [scrollAfterRedirect]);

  const changePathAndScroll = () => {
    if (window.location.pathname === '/') {
      scroll(linkToAddress, blockCenter);
    } else {
      navigate('/#top');
      setScrollAfterRedirect(true);
    }
  };

  const RenderDocsItems = docsNameArray.map(({ id, text }) => (
    <FooterDocsItem key={id} text={text} />
  ));

  return (
    <ul className={styles['footer-docs']}>
      <button onClick={changePathAndScroll}>
        <p>Адреси</p>
      </button>
      {RenderDocsItems}
    </ul>
  );
};

export default FooterDocs;
