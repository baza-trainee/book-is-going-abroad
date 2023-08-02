import Container from '../layouts/Container/Container.jsx';
import Slider from './Slider/Slider.jsx';

import styles from './Activity.module.css';

const Activity = () => (
  <section className={styles.activity}>
    <Container className={styles['activity-container']}>
      <h2 className={styles['activity-title']}>Активності нашої організації</h2>
      <Slider />
    </Container>
  </section>
);

export default Activity;
