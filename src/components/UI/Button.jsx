/* eslint-disable react/prop-types */
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const classes = `${props.className || ''} ${styles.btn}`;
  return (
    // eslint-disable-next-line react/prop-types, react/jsx-no-comment-textnodes
    <button className={classes} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
