import Container from '../layouts/Container/Container.jsx';
import FeedbackForm from './FeedbackForm/FeedbackForm.jsx';
import FeedbackPhones from './FeedbackPhones/FeedbackPhones.jsx';

import styles from './Feedback.module.css';

const Feedback = () => (
  <section className={styles.feedback}>
    <Container>
      <div className={styles['feedback-wrapper']}>
        <h2 className={styles['feedback-title']}>Зворотній зв’язок</h2>
        <div className={styles['feedback-content-wrapper']}>
          <div className={styles['feedback-form-wrapper']}>
            <h4 className={styles['feedback-subtitle']}>Напишіть нам</h4>
            <FeedbackForm />
          </div>
          <div className={styles['feedback-phones-wrapper']}>
            <h4 className={styles['feedback-subtitle']}>Зателефонуйте нам</h4>
            <FeedbackPhones />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Feedback;
