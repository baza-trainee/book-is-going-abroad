// eslint-disable-next-line import/no-unresolved, import/extensions
import Hero from '../../Hero/Hero.jsx';
import Activity from '../../Activity/Activity.jsx';
import Features from '../../Features/Features.jsx';
import Feedback from '../../Feedback/Feedback.jsx';
// eslint-disable-next-line import/no-unresolved
import styles from './Main.module.css';

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Hero />
    <Features />
    <Activity />
    <Feedback />
  </main>
);

export default Main;
