import styles from './Container.module.css';

// eslint-disable-next-line react/prop-types
const Container = (props) => {
  // eslint-disable-next-line react/prop-types
  const classes = `${styles.container} ${props.className || ''}`;
  // eslint-disable-next-line react/prop-types
  return <div className={classes}>{props.children}</div>;
};

export default Container;
