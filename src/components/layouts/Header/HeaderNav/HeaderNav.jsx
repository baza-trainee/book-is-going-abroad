/* eslint-disable comma-dangle */
import styles from '../Header.module.css';
import { ReactComponent as AddressIcon } from './Adresse.svg';
import { ReactComponent as FrameIcon } from './Frame.svg';
import { ReactComponent as FluentIcon } from './fluent.svg';
import { ReactComponent as QuestionIcon } from './question.svg';
import { ReactComponent as PartnerIcon } from './partnership.svg';
import NavButton from './NavButtons.jsx';

export default function HeaderNav() {
  const navButtonsArr = [
    {
      id: 1,
      text: 'Адреси',
      icon: <AddressIcon />,
      link: 'address',
    },
    {
      id: 2,
      text: 'Активності',
      icon: <FluentIcon />,
      link: 'activity',
    },
    {
      id: 3,
      text: 'Ціль проекту',
      icon: <QuestionIcon />,
      link: 'features',
    },
    {
      id: 4,
      text: 'Партнери',
      icon: <PartnerIcon />,
      link: 'partners',
    },
    // eslint-disable-next-line comma-dangle
    {
      id: 5,
      text: "Зв'язатися",
      icon: <FrameIcon />,
      link: 'feedback',
    },
  ];

  const RenderButtons = navButtonsArr.map(({ id, icon, text, link }) => (
    <NavButton key={id} icon={icon} text={text} link={link} block="center" />
  ));

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navBtnWrapper}>{RenderButtons}</div>
    </nav>
  );
}
