import { useContext } from 'react';

// eslint-disable-next-line import/extensions
import { TranslateContext } from '../../contexts/translate-context.js';
import Container from '../layouts/Container/Container.jsx';
import Slider from './Slider/Slider.jsx';

import styles from './Activity.module.css';

const Activity = () => {
  const { translate } = useContext(TranslateContext);

  return (
    <section className={styles.activity}>
      <Container className={styles['activity-container']}>
        <h2 className={styles['activity-title']}>
          {translate('activity.title')}
        </h2>
        <Slider />
      </Container>
    </section>
  );
};

export default Activity;
