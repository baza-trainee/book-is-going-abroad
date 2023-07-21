import Container from '../../Container/Container.jsx';
import styles from '../Header.module.css';
import logo from './Logo.svg';

export default function HeaderUpper() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerLogo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <h1 className={styles.headerTitle}>
          БЛАГОДІЙНА ОРГАНІЗАЦІЯ «МІЖНАРОДНИЙ БЛАГОДІЙНИЙ ФОНД «ДОПОМОГА
          ПОСТРАЖДАЛИМ ДІТЯМ З УКРАЇНИ»
        </h1>

        <div className={styles.headerLanguage}>
          <div className={styles.selectWrapper}>
            <select className={styles.langSelect} name="/" id="/">
              <option value="ua">UA</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </Container>
    </header>
  );
}
