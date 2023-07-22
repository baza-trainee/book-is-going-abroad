// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

import Button from '../../UI/Button.jsx';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <main className={styles['not-found-page']}>
    <NavLink to="/">
      <Button className={styles['btn-on-main']}>На головну</Button>
    </NavLink>
  </main>
);

export default NotFoundPage;
