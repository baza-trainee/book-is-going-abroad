/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import Select from 'react-select';
import './langSelect.css';
import { useState, useRef, useEffect, useContext } from 'react';
import { TranslateContext } from '../../../../../contexts/translate-context';

export default function LangSelect() {
  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'eng', label: 'EN' },
    { value: 'de', label: 'DE' },
  ];

  const { handleLanguageChange, currentLocale } = useContext(TranslateContext);

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOrTouchOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOrTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOrTouchOutside);
    };
  }, []);

  const toggleSelect = () => {
    setIsSelectOpen((prevState) => !prevState);
  };

  const getValue = () =>
    currentLocale ? options.find((c) => c.value === currentLocale) : '';

  return (
    <div
      className="langWrapper"
      ref={selectRef}
      onClick={toggleSelect}
      onTouchStart={(event) => {
        event.stopPropagation();
        setIsSelectOpen(true);
      }}>
      <Select
        menuIsOpen={isSelectOpen}
        onChange={handleLanguageChange}
        options={options}
        classNamePrefix="custom-select"
        value={getValue()}
      />
    </div>
  );
}
