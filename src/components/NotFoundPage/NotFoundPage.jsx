// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import Button from '../UI/Button.jsx';
import Container from '../layouts/Container/Container.jsx';
// eslint-disable-next-line import/extensions
import { TranslateContext } from '../../contexts/translate-context.js';

import styles from './NotFoundPage.module.css';
import image from '../../assets/img/404.webp';

const NotFoundPage = () => {
  const { translate } = useContext(TranslateContext);

  return (
  <main className={styles['not-found-page']}>
    <Container className={styles['not-found-page-container']}>
      <div className={styles['not-found-page-img-wrapper']}><img src={image} alt="404" /></div>
      <NavLink to="/">
        <Button className={styles['btn-on-main']}>{translate('404.button')}</Button>
      </NavLink>
    </Container>
  </main>
  );
};

export default NotFoundPage;
