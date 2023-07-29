// eslint-disable-next-line import/no-unresolved, import/extensions
import Features from '../Features/Features.jsx';

// eslint-disable-next-line import/no-unresolved
import styles from './Main.module.css';

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Features />
  </main>
);

export default Main;
