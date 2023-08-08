/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import Select from 'react-select';
import './langSelect.css';
import { useState } from 'react';

export default function LangSelect() {
  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'en', label: 'EN' },
    { value: 'de', label: 'DE' },
  ];

  const [currentLang, setCurrentLang] = useState('ua');
  const getValue = () =>
    currentLang ? options.find((c) => c.value === currentLang) : '';

  const onChange = (newValue) => {
    setCurrentLang(newValue.value);
  };

  return (
    <div>
      <Select
        onChange={onChange}
        options={options}
        classNamePrefix="custom-select"
        value={getValue()}></Select>
    </div>
  );
}
