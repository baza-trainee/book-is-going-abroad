// eslint-disable-next-line import/no-unresolved, import/extensions
import Activity from '../../Activity/Activity.jsx';
import Address from '../../Address/Address.jsx';
import Features from '../../Features/Features.jsx';
import Feedback from '../../Feedback/Feedback.jsx';
// eslint-disable-next-line import/no-unresolved
import styles from './Main.module.css';

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Features />
    <Activity />
    <Address />
    <Feedback />
  </main>
);

export default Main;
