// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button.jsx';
import Container from '../layouts/Container/Container.jsx';

import styles from './NotFoundPage.module.css';
import image from '../../assets/img/404.png';

const NotFoundPage = () => (
  <main className={styles['not-found-page']}>
    <Container className={styles['not-found-page-container']}>
      <div className={styles['not-found-page-img-wrapper']}><img src={image} alt="404" /></div>
      <NavLink to="/">
        <Button className={styles['btn-on-main']}>На головну</Button>
      </NavLink>
    </Container>
  </main>
);

export default NotFoundPage;
