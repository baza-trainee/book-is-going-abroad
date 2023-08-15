// eslint-disable-next-line import/no-unresolved, import/extensions
import Hero from '../../Hero/Hero.jsx';
import Activity from '../../Activity/Activity.jsx';
import Address from '../../Address/Address.jsx';
import Features from '../../Features/Features.jsx';
import Directions from '../../Directions/Directions.jsx';
import Partners from '../../Partners/Partners.jsx';
import Feedback from '../../Feedback/Feedback.jsx';
import Support from '../../Support/Support.jsx';
// eslint-disable-next-line import/no-unresolved
import styles from './Main.module.css';

const Main = () => (
  // eslint-disable-next-line react/prop-types
  <main className={styles.main}>
    <Hero />
    <Features />
    <Activity />
    <Address />
    <Directions />
    <Partners />
    <Feedback />
    <Support />
  </main>
);

export default Main;
