/* eslint-disable react/prop-types */
import { useState } from 'react';

import styles from './SupportAccordion.module.css';
import arrowIcon from './arrowIcon.svg';

const AccordionSection = ({ section, isActiveSection, setActiveIndex, sectionIndex }) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div className={styles['support-accordion']}>
      <div className={styles['accordion-header']} onClick={toggleSection}>
        <h4>{section.title}</h4>
        {isActiveSection ? (
          <img src={arrowIcon} />
        ) : (
          <img
            className={styles['accordion-arrow-transform']}
            src={arrowIcon}
          />
        )}
      </div>
      {isActiveSection && (
        <div className={styles['accordion-description']}>
          <p>{section.content1}</p>
          <p>{section.content2}</p>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SupportAccordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles['support-accordion-wrapper']}>
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
