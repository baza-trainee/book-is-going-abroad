import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TranslateContext } from '../../../../contexts/translate-context';

import styles from './FooterDocs.module.css';
import pdfPrivacyPolicy from '../../../../assets/docs/privacy-policy.pdf';
import pdfRegulations from '../../../../assets/docs/regulations.pdf';
import pdfSiteUsageRules from '../../../../assets/docs/site-usage-rules.pdf';

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
  const { translate } = useContext(TranslateContext);

  const docsNameArray = [
    { id: 1, text: translate('footer.regulations'), pdf: pdfRegulations },
    { id: 2, text: translate('footer.policy'), pdf: pdfPrivacyPolicy },
    { id: 3, text: translate('footer.terms'), pdf: pdfSiteUsageRules }
  ];

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
        <p>{translate('footer.addresses')}</p>
      </button>
      {RenderDocsItems}
    </ul>
  );
};

export default FooterDocs;
