/* eslint-disable global-require */
import { useState, useEffect, useRef } from 'react';

import Container from '../layouts/Container/Container.jsx';

import styles from './Address.module.css';

const Address = () => {
  const addresses = [
    {
      city: 'Київ',
      address: 'вул. О.Тихого, 55/13 | +380442095302',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.1536578394355!2d30.43981572290238!3d50.448278368684434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc2368662709%3A0x609e55c29c3b4020!2z0LLRg9C70LjRhtGPINCe0LvQtdC60YHQuCDQotC40YXQvtCz0L4sIDU1LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1692189911966!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Краснова, 10, Бібліотека для дітей № 104 "Промінець"',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.028528230678!2d30.371247139042286!3d50.45866220048677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc8d8d63a823%3A0x26d5697814583ac5!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10LkgItCf0YDQvtC80ZbQvdC10YbRjCI!5e0!3m2!1suk!2sua!4v1690991493142!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Зодчих, 30/6, Бібліотека для дітей Книжкова світлиця',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.142183296672!2d30.371340876973484!3d50.419822489568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb942a94249b%3A0x653869b43645951!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10LkgItCa0L3QuNC20LrQvtCy0LAg0YHQstGW0YLQu9C40YbRjyI!5e0!3m2!1suk!2sua!4v1690991612551!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Декарта, 14, Бібліотека для дітей ім. М.Дубова',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.114049063248!2d30.337167676975202!3d50.45760088684838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cca4629de2e7%3A0xc9afe78f7180b990!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10Lkg0ZbQvC4g0Jwu0JTRg9Cx0L7QstCw!5e0!3m2!1suk!2sua!4v1690991887703!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Симиренка, 5А, Бібліотека Джерело',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5675129842944!2d30.39868017697301!3d50.41189719013842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbe71de4a0bb%3A0x53654b69bfeb1a0!2z0JHRltCx0LvRltC-0YLQtdC60LAgItCU0LbQtdGA0LXQu9C-Ig!5e0!3m2!1suk!2sua!4v1690991967903!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Петрицького, 5/9, Бібліотека імені Н.Рибака для юнацтва',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.268039684005!2d30.37743134092604!3d50.454733199342286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc896481acd3%3A0x8338a3c743d21de8!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvCDQnS7QoNC40LHQsNC60LA!5e0!3m2!1suk!2sua!4v1690992158014!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Підлісна, 3, Бібліотека ім. В.Стефаника',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.6698672608181!2d30.337105747100935!3d50.472018749760906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccb5e4cd379f%3A0x6c810dc2435e466c!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JIuINCh0YLQtdGE0LDQvdC40LrQsA!5e0!3m2!1suk!2sua!4v1690992306391!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Зодчих, 6, Бібліотека ім. Махтумкулі',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.1962766456559!2d30.383892222560803!3d50.41515737787104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbea69354735%3A0x5214e99bd1595ebc!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JzQsNGF0YLRg9C80LrRg9C70ZY!5e0!3m2!1suk!2sua!4v1690992364482!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Краснова, 12, 03115, Бібліотека ім. О.Герцена',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.0048872714189!2d30.372230933660123!3d50.45936065227459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc8d85f148e5%3A0x40a5cd8fcf89abd1!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0J4uINCT0LXRgNGG0LXQvdCw!5e0!3m2!1suk!2sua!4v1690992413693!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Гната Юри, 5, Бібліотека імені О.Блока',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.7195190363448!2d30.384445834205057!3d50.43292242463842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb89046e5d35%3A0x495b327e33bc7658!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JAg0JHQu9C-0LrQsA!5e0!3m2!1suk!2sua!4v1690992468429!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'вул. Жюля Верна, 13Б, ЦРБ ЦБС Свічадо | +380984324166',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.6842662400836!2d30.364166718862474!3d50.43423584134286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb82452c5a03%3A0xd1a6059ca43619ac!2z0KbQtdC90YLRgNCw0LvRjNC90LAg0YDQsNC50L7QvdC90LAg0LHRltCx0LvRltC-0YLQtdC60LAg0KHQstGW0YfQsNC00L4!5e0!3m2!1suk!2sua!4v1690992563785!5m2!1suk!2sua'
    },
    {
      city: 'Неграші',
      address: 'вул. Шевченка, 23А | +380677267663',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.8585121514122!2d30.075038661243415!3d50.38090726226629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b4bd13a59c037%3A0x50fb8cb67858dc1!2z0JHRg9C00LjQvdC-0Log0LrRg9C70YzRgtGD0YDQuA!5e0!3m2!1suk!2sua!4v1690992746919!5m2!1suk!2sua'
    },
    {
      city: 'Музичі',
      address: 'вул. Музична, 2Б | +380507168173',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.3586573236723!2d30.11070757612311!3d50.35844964924475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b4b29acbdba27%3A0xa506af680c1eed7b!2z0LLRg9C7LiDQnNGD0LfQuNGH0L3QsCwgMtCRLCDQnNGD0LfQuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxMjU!5e0!3m2!1suk!2sua!4v1690992991181!5m2!1suk!2sua'
    },
    {
      city: 'Гореничі',
      address: 'вул. Соборна, 203 | +380967965393',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.609926131048!2d30.204768097452998!3d50.41427877991103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b356dd58e97f7%3A0x22527ef09d520937!2z0KPQn9CmINCg0ZbQt9C00LLQsCDQn9GA0LXRgdCy0Y_RgtC-0Zcg0JHQvtCz0L7RgNC-0LTQuNGG0ZYsINCy0YPQu9C40YbRjyDQodC-0LHQvtGA0L3QsCwgMjAzLCDQk9C-0YDQtdC90LjRh9GWLCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4MTE0!5e0!3m2!1suk!2sua!4v1690993051101!5m2!1suk!2sua'
    },
    {
      city: 'Лука',
      address: 'вул. Шевченка, 24 | +380674093918',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535.0084072228323!2d30.16728267854148!3d50.36761326064852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b4addfd64e2ab%3A0x5455211d5435cdb1!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7Lg!5e0!3m2!1suk!2sua!4v1691757262533!5m2!1suk!2sua'
    },
    {
      city: 'Білогородка',
      address: 'вул. Володимирська, 60А | +380982742655',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.4271166396056!2d30.23208251791339!3d50.392858285113824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3554ceb61691%3A0x82d45592df4ce741!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNGB0YzQutCwLCA2MCwg0JHRltC70L7Qs9C-0YDQvtC00LrQsCwg0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LsuLCAwODE0MA!5e0!3m2!1suk!2sua!4v1690993216616!5m2!1suk!2sua'
    },
    {
      city: 'Святопетрівське',
      address: 'вул. Центральна, 38 | +380973541907',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.9263643027506!2d30.313426752428473!3d50.39068906507875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca5fa60f32e9%3A0xa476ce7f2a208e8f!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCAzOCwg0KHQstGP0YLQvtC_0LXRgtGA0ZbQstGB0YzQutC1LCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4MTQx!5e0!3m2!1suk!2sua!4v1690993272604!5m2!1suk!2sua'
    },
    {
      city: 'Ірпінь',
      address: 'вул. Мінеральна, 2, ДП Санаторій "Дубки"',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.0914752528035!2d30.242075239461627!3d50.53076763627751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3229c32ab167%3A0xfc8098a3509e1add!2z0KHQsNC90LDRgtC-0YDRltC5ICLQlNGD0LHQutC4Ig!5e0!3m2!1suk!2sua!4v1690993327311!5m2!1suk!2sua'
    }
  ];

  const [selectedCity, setSelectedCity] = useState('Київ');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [linkMap, setLinkMap] = useState('');
  const [isCitySelectOpen, setIsCitySelectOpen] = useState(false);
  const [isAddressSelectOpen, setIsAddressSelectOpen] = useState(false);

  const uniqueCities = [...new Set(addresses.map((address) => address.city))];

  const citySelectRef = useRef(null);
  const addressSelectRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDefaultAddress = () => {
    const defaultAddress = addresses.find(
      (address) => address.city === selectedCity
    );
    return defaultAddress ? defaultAddress.address : addresses[0].address;
  };

  const getDefaultLink = () => {
    const defaultLink = addresses.find(
      (address) => address.city === selectedCity
    );
    return defaultLink ? defaultLink.link : addresses[0].link;
  };

  useEffect(() => {
    setSelectedAddress(getDefaultAddress());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLinkMap(getDefaultLink());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const defaultAddress = addresses.find(
      (address) => address.city === selectedCity
    );
    setSelectedAddress(defaultAddress ? defaultAddress.address : '');
    setLinkMap(defaultAddress ? defaultAddress.link : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    setIsCitySelectOpen(false);

    const defaultAddress = addresses.find((address) => address.city === newCity);
    setSelectedAddress(defaultAddress ? defaultAddress.address : '');
  };

  const handleAddressChange = (event) => {
    const newAddressLink = event.target.value;
    setSelectedAddress(newAddressLink);
    setIsAddressSelectOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const defaultLink = addresses.find((address) => address.address === selectedAddress);
    setLinkMap(defaultLink ? defaultLink.link : '');
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
    <section className={styles.address} id='address'>
      <Container className={styles['address-container']}>
        <h2 className={styles['address-title']}>
          Адреси видачі та прийому гуманітарної допомоги
        </h2>
        <div className={styles['address-map-wrapper']}>
          <div className={styles['address-inputs']}>
            <div
              ref={citySelectRef}
              onClick={toggleCitySelect}
              className={`${styles['select-city-wrapper']} ${
                styles['address-select']
              } ${isCitySelectOpen ? styles.open : ''}`}>
              <div className={styles['select-title']}>{selectedCity}</div>
              <div className={styles['address-select-inputs']} onClick={(e) => {
                toggleCitySelect();
                handleCityChange(e);
              }}>
                {uniqueCities.map((city, index) => (
                  <label key={index} value={city}
                    onClick={() => {
                      setIsCitySelectOpen(false);
                      setIsAddressSelectOpen(false);
                    }}>
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
              } ${
                isAddressSelectOpen ? styles.open : ''
              }`}>
                <div className={styles['select-title']}>{selectedAddress}</div>
              <div className={styles['address-select-inputs']} onClick={(e) => {
                toggleAddressSelect();
                handleAddressChange(e);
              }}>
                {addresses
                  .filter((address) => address.city === selectedCity)
                  .map((address, index) => (
                  <label key={index} value={address.address} >
                    <img
                      src={
                        address.address === selectedAddress
                          ? require('./radio-img-checked.svg').default
                          : require('./radio-img.svg').default
                      }
                      alt=""
                    />
                    <input
                      type="radio"
                      name="address"
                      value={address.address}
                      checked={address.address === selectedAddress}
                      onChange={(e) => {
                        toggleAddressSelect();
                        handleAddressChange(e);
                      }}
                    />
                    {address.address}
                  </label>))}
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
                src={linkMap}></iframe>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Address;
