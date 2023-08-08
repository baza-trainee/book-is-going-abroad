/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import Select from 'react-select';
import './langSelect.css';
import { useState, useRef, useEffect } from 'react';

export default function LangSelect() {
  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'en', label: 'EN' },
    { value: 'de', label: 'DE' },
  ];

  const [currentLang, setCurrentLang] = useState('ua');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const getValue = () =>
    currentLang ? options.find((c) => c.value === currentLang) : '';

  const onChange = (newValue) => {
    setCurrentLang(newValue.value);
  };

  return (
    <div ref={selectRef} onClick={handleClick}>
      <Select
        menuIsOpen={isSelectOpen}
        onChange={onChange}
        options={options}
        classNamePrefix="custom-select"
        value={getValue()}
      />
    </div>
  );
}
