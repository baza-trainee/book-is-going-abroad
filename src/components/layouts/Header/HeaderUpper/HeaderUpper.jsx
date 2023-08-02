import styles from '../Header.module.css';
import logo from './Logo.svg';

export default function HeaderUpper() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <p className={styles.headerTitle}>
        БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
        ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
      </p>

      <div className={styles.headerLanguage}>
        <div className={styles.selectWrapper}>
          <select className={styles.langSelect} name="/" id="/">
            <option value="ua">UA</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
}
