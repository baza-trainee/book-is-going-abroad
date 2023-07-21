/* eslint-disable react/prop-types */
import styles from '../Header.module.css';

const NavButton = ({ icon, text }) => (
  <button className={styles.navBtn}>
    {icon}
    <p className={styles.navBtnText}>{text}</p>
  </button>
);

export default NavButton;
