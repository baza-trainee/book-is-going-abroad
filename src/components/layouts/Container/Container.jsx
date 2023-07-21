import styles from './Container.module.css';

// eslint-disable-next-line react/prop-types
const Container = (props) => <div className={styles.container}>{props.children}</div>;

export default Container;
