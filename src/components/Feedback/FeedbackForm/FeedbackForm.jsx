import Button from '../../UI/Button.jsx';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => (
    <form className={styles['feedback-form']}>
      <input type="text" name="text" placeholder="Ім’я*" required />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        required
      />
      <textarea type="text" placeholder="Повідомлення" />
      <Button className={styles['feedback-button']} type="submit">
        Надіслати
      </Button>
    </form>
);

export default FeedbackForm;
