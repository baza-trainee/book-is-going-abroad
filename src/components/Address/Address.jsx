/* eslint-disable global-require */
import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';

import Container from '../layouts/Container/Container.jsx';
// eslint-disable-next-line import/extensions
import { TranslateContext } from '../../contexts/translate-context.js';

import styles from './Address.module.css';

const Address = () => {
  const { translate, currentLocale } = useContext(TranslateContext);

  const [addresses, setAddresses] = useState([]);
  // eslint-disable-next-line no-nested-ternary
  const [selectedCity, setSelectedCity] = useState(currentLocale === 'ua' ? 'Київ' : currentLocale === 'eng' ? 'Kyiv' : currentLocale === 'de' ? 'Kyiw' : null);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [linkMap, setLinkMap] = useState('');
  const [isCitySelectOpen, setIsCitySelectOpen] = useState(false);
  const [isAddressSelectOpen, setIsAddressSelectOpen] = useState(false);

  useEffect(() => {
    // Make the API request to fetch images
    axios
      .get('https://www.openbookhands.site/admin/api/v1/adress/')
      .then((response) => {
        setAddresses(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching images:', error);
      });
  }, []);

  const uniqueCities = [
    ...new Set(addresses.map((address) => address[`city_${currentLocale}`]))
  ];

  const citySelectRef = useRef(null);
  const addressSelectRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDefaultAddress = () => {
    const defaultAddress = addresses.find(
      (address) => address[`city_${currentLocale}`] === selectedCity
    );
    return defaultAddress
      ? defaultAddress[`address_${currentLocale}`]
      : addresses[0][`address_${currentLocale}`];
  };

  // eslint-disable-next-line consistent-return
  const getDefaultLink = () => {
    if (addresses.length > 0) {
      const defaultLink = addresses.find(
        (address) => address[`city_${currentLocale}`] === selectedCity
      );

      return defaultLink ? defaultLink.link : addresses[0].link;
    }
  };

  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedCity(addresses[0][`city_${currentLocale}`]);
    }
  }, [addresses, currentLocale]);

  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedAddress(getDefaultAddress());
      setLinkMap(getDefaultLink());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  useEffect(() => {
    setLinkMap(getDefaultLink());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  useEffect(() => {
    const defaultAddress = addresses.find(
      (address) => address[`city_${currentLocale}`] === selectedCity
    );
    setSelectedAddress(
      defaultAddress ? defaultAddress[`address_${currentLocale}`] : ''
    );
    setLinkMap(defaultAddress ? defaultAddress.link : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    setIsCitySelectOpen(false);

    const defaultAddress = addresses.find(
      (address) => address[`city_${currentLocale}`] === newCity
    );
    setSelectedAddress(
      defaultAddress ? defaultAddress[`address_${currentLocale}`] : ''
    );
  };

  const handleAddressChange = (event) => {
    const newAddressLink = event.target.value;
    setSelectedAddress(newAddressLink);
    setIsAddressSelectOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (addresses.length > 0) {
      const defaultLink = addresses.find(
        (address) => address[`address_${currentLocale}`] === selectedAddress
      );
      setLinkMap(defaultLink ? defaultLink.link : '');
    }
  });

  const toggleCitySelect = () => {
    setIsCitySelectOpen((prev) => !prev);
    setIsAddressSelectOpen(false);
  };

  const toggleAddressSelect = () => {
    setIsAddressSelectOpen((prev) => !prev);
    setIsCitySelectOpen(false);
  };

  useEffect(() => {
    const handleCityOutsideClick = (event) => {
      if (
        citySelectRef.current
        && !citySelectRef.current.contains(event.target)
      ) {
        setIsCitySelectOpen(false);
      }
    };

    const handleAddressOutsideClick = (event) => {
      if (
        addressSelectRef.current
        && !addressSelectRef.current.contains(event.target)
      ) {
        setIsAddressSelectOpen(false);
      }
    };

    document.addEventListener('click', handleCityOutsideClick);
    document.addEventListener('click', handleAddressOutsideClick);

    return () => {
      document.removeEventListener('click', handleCityOutsideClick);
      document.removeEventListener('click', handleAddressOutsideClick);
    };
  }, []);

  return (
    <section className={styles.address} id="address">
      <Container className={styles['address-container']}>
        <h2 className={styles['address-title']}>
          {translate('addresses.title')}
        </h2>
        <div className={styles['address-map-wrapper']}>
          <div className={styles['address-inputs']}>
            <div
              ref={citySelectRef}
              onClick={toggleCitySelect}
              className={`${styles['select-city-wrapper']} ${
                styles['address-select']
              } ${isCitySelectOpen ? styles.open : ''}`}
            >
              <div className={styles['select-title']}>{selectedCity}</div>
              <div
                className={styles['address-select-inputs']}
                onClick={(e) => {
                  toggleCitySelect();
                  handleCityChange(e);
                }}
              >
                {uniqueCities.map((city, index) => (
                  <label
                    key={index}
                    value={city}
                    onClick={() => {
                      setIsCitySelectOpen(false);
                      setIsAddressSelectOpen(false);
                    }}
                  >
                    <img
                      src={
                        city === selectedCity
                          ? require('./radio-img-checked.svg').default
                          : require('./radio-img.svg').default
                      }
                      alt=""
                    />
                    <input
                      type="radio"
                      name="city"
                      value={city}
                      checked={city === selectedCity}
                      onChange={(e) => {
                        toggleCitySelect();
                        handleCityChange(e);
                      }}
                    />
                    {city}
                  </label>
                ))}
              </div>
            </div>
            <div
              ref={addressSelectRef}
              onClick={toggleAddressSelect}
              className={`${styles['select-address-wrapper']} ${
                styles['address-select']
              } ${isAddressSelectOpen ? styles.open : ''}`}
            >
              <div className={styles['select-title']}>{selectedAddress}</div>
              <div
                className={styles['address-select-inputs']}
                onClick={(e) => {
                  toggleAddressSelect();
                  handleAddressChange(e);
                }}
              >
                {addresses
                  .filter(
                    (address) => address[`city_${currentLocale}`] === selectedCity
                  )
                  .map((address, index) => (
                    <label
                      key={index}
                      value={address[`address_${currentLocale}`]}
                    >
                      <img
                        src={
                          address[`address_${currentLocale}`]
                          === selectedAddress
                            ? require('./radio-img-checked.svg').default
                            : require('./radio-img.svg').default
                        }
                        alt=""
                      />
                      <input
                        type="radio"
                        name="address"
                        value={address[`address_${currentLocale}`]}
                        checked={
                          address[`address_${currentLocale}`]
                          === selectedAddress
                        }
                        onChange={(e) => {
                          toggleAddressSelect();
                          handleAddressChange(e);
                        }}
                      />
                      {address[`address_${currentLocale}`]}
                    </label>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles['address-map']}>
            {linkMap && (
              <iframe
                title="Google Map"
                width="600"
                height="310"
                frameBorder="0"
                style={{ border: 0 }}
                src={linkMap}
              ></iframe>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Address;
