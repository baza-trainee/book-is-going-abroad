import { useContext } from 'react';
import Container from '../layouts/Container/Container.jsx';
import FeedbackForm from './FeedbackForm/FeedbackForm.jsx';
import FeedbackPhones from './FeedbackPhones/FeedbackPhones.jsx';

import { TranslateContext } from '../../contexts/translate-context';

import styles from './Feedback.module.css';

const Feedback = () => {
  const { translate } = useContext(TranslateContext);

  return (
    <section className={styles.feedback}>
      <Container>
        <div className={styles['feedback-wrapper']}>
          <h2 className={styles['feedback-title']}>
            {translate('feedback.title')}
          </h2>
          <div className={styles['feedback-wrapper-content']}>
            <div className={styles['feedback-wrapper-form']}>
              <h4 className={styles['feedback-subtitle']}>
                {translate('feedback.writeUs')}
              </h4>
              <FeedbackForm />
            </div>
            <div className={styles['feedback-wrapper-phones']}>
              <h4 className={styles['feedback-subtitle']}>
                {translate('feedback.subtitle')}
              </h4>
              <FeedbackPhones />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
