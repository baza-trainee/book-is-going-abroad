/* eslint-disable react/prop-types */
import { useState } from 'react';

import styles from './SupportAccordion.module.css';
import arrowIcon from './arrowIcon.svg';

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className={styles['support-accordion']}>
      <div className={styles['accordion-header']} onClick={toggleSection}>
        <h4 className={styles['accordion-title']}>{section.title}</h4>
        {isActiveSection ? (
          <img
            className={styles['accordion-arrow-transform']}
            src={arrowIcon}
          />
        ) : (
          <img className={styles['accordion-arrow-back']} src={arrowIcon} />
        )}
      </div>
      {isActiveSection && (
        <div className={styles['accordion-description']}>
          {section.content1}
          {section.content2}
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SupportAccordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className={styles['support-accordions']}>
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default SupportAccordion;
