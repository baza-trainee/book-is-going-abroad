// eslint-disable-next-line import/no-unresolved
import styles from './Main.module.css';

const Main = (props) => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>{props.children}</main>
);

export default Main;
