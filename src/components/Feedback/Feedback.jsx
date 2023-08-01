import Container from '../layouts/Container/Container.jsx';
import Button from '../UI/Button.jsx';
import styles from './Feedback.module.css';
import icon from './feedback-phone-icon.svg';

const Feedback = () => (
  <section className={styles.feedback}>
    <Container>
      <div className={styles['feedback-wrapper']}>
        <h2 className={styles['feedback-title']}>Зворотній зв’язок</h2>
        <div className={styles['feedback-content-wrapper']}>
          <div className={styles['feedback-form-wrapper']}>
            <h4 className={styles['feedback-subtitle']}>Напишіть нам</h4>
            <form className={styles['feedback-form']}>
              <input
                type="text"
                name="text"
                placeholder="Ім’я*"
                required
              />
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
          </div>
          <div className={styles['feedback-phones-wrapper']}>
            <h4 className={styles['feedback-subtitle']}>Зателефонуйте нам</h4>
            <ul className={styles['phones-list']}>
              <li>
                <img src={icon} alt="phone-icon" />
                <a href="tel:+380442095302">+38 044 209 53 02</a>
              </li>
              <li>
                <img src={icon} alt="phone-icon" />
                <a href="tel:+380986838521">+38 098 683 85 21</a>
              </li>
              <li>
                <img src={icon} alt="phone-icon" />
                <a href="tel:+380983068484">+38 098 306 84 84</a>
              </li>
              <li>
                <img src={icon} alt="phone-icon" />
                <a href="tel:+380634993769">+38 063 499 37 69</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Feedback;
