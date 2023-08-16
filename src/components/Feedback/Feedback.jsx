import Container from '../layouts/Container/Container.jsx';
import FeedbackForm from './FeedbackForm/FeedbackForm.jsx';
import FeedbackPhones from './FeedbackPhones/FeedbackPhones.jsx';

import styles from './Feedback.module.css';

const Feedback = () => (
  <section className={styles.feedback}>
    <Container>
      <div className={styles['feedback-wrapper']}>
        <h2 className={styles['feedback-title']}>Зворотній зв’язок</h2>
        <div className={styles['feedback-wrapper-content']}>
          <div className={styles['feedback-wrapper-form']}>
            <h4 className={styles['feedback-subtitle']}>Напишіть нам</h4>
            <FeedbackForm />
          </div>
          <div className={styles['feedback-wrapper-phones']}>
            <h4 className={styles['feedback-subtitle']}>Зателефонуйте нам</h4>
            <FeedbackPhones />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Feedback;
