import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './FooterDocs.module.css';
import pdfPrivacyPolicy from '../../../../assets/docs/privacy-policy.pdf';
import pdfRegulations from '../../../../assets/docs/regulations.pdf';
import pdfSiteUsageRules from '../../../../assets/docs/site-usage-rules.pdf';

const docsNameArray = [
  { id: 1, text: 'Статут', pdf: pdfRegulations },
  { id: 2, text: 'Політика Конфіденційності', pdf: pdfPrivacyPolicy },
  { id: 3, text: 'Умови Використання Сайту', pdf: pdfSiteUsageRules }
];

const linkToAddress = 'address';
const blockCenter = 'center';

export function scroll(className, block) {
  const section = document.querySelectorAll(`[class*=${className}]`);
  if (section.length > 0) {
    section[0].scrollIntoView({ behavior: 'smooth', block });
  }
}

// eslint-disable-next-line react/prop-types
export const FooterDocsItem = ({ text, pdf }) => (
  <li>
    <a
      target="_blank"
      href={pdf}
      rel="noopener noreferrer">
      <p>{text}</p>
    </a>
  </li>
);

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

  const RenderDocsItems = docsNameArray.map(({ id, text, pdf }) => (
    <FooterDocsItem key={id} text={text} pdf={pdf} />
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
