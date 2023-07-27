import FooterDocsItem from './FooterDocsItem/FooterDocsItem.jsx';

import styles from './FooterDocs.module.css';

const docsNameArray = [
  { id: 1, text: 'Статут' },
  { id: 2, text: 'Адреси' },
  { id: 3, text: 'Звітність' },
  { id: 4, text: 'Політика Конфіденційності' },
  { id: 5, text: 'Умови Використання Сайту' }
];

const FooterDocs = () => {
  const RenderDocsItems = docsNameArray.map(({ id, text }) => (
    <FooterDocsItem key={id} text={text} />
  ));

  return (
  <ul className={styles['footer-docs']}>
    {RenderDocsItems}
  </ul>
  );
};

export default FooterDocs;
