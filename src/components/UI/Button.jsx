import styles from './Button.module.css';

const Button = (props) => (
  // eslint-disable-next-line react/prop-types
  <button className={styles.btn} onClick={props.onClick} type={props.type}>
    {/* {props.children} */}
  </button>
);

export default Button;
