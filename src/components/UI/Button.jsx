import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, type, children }) => (
  <button className={styles.btn} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
