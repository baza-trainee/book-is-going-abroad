import { useState, useEffect } from 'react';

import Container from '../layouts/Container/Container.jsx';

import styles from './Address.module.css';

const Address = () => {
  const [selectedCity, setSelectedCity] = useState('Київ');
  const [selectedAddress, setSelectedAddress] = useState('');

  const addresses = [
    {
      city: 'Київ',
      address: 'Краснова, 10, Бібліотека Промінець',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.028528230678!2d30.371247139042286!3d50.45866220048677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc8d8d63a823%3A0x26d5697814583ac5!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10LkgItCf0YDQvtC80ZbQvdC10YbRjCI!5e0!3m2!1suk!2sua!4v1690991493142!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Зодчих, 3\\б, Бібліотека Книжкова Світлиця',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.142183296672!2d30.371340876973484!3d50.419822489568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb942a94249b%3A0x653869b43645951!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10LkgItCa0L3QuNC20LrQvtCy0LAg0YHQstGW0YLQu9C40YbRjyI!5e0!3m2!1suk!2sua!4v1690991612551!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Декарта, 14, Бібліотека ім.Дубова для дітей',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.114049063248!2d30.337167676975202!3d50.45760088684838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cca4629de2e7%3A0xc9afe78f7180b990!2z0JHRltCx0LvRltC-0YLQtdC60LAg0LTQu9GPINC00ZbRgtC10Lkg0ZbQvC4g0Jwu0JTRg9Cx0L7QstCw!5e0!3m2!1suk!2sua!4v1690991887703!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Симиренка, 5\\А, Бібілотека Джерело',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5675129842944!2d30.39868017697301!3d50.41189719013842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbe71de4a0bb%3A0x53654b69bfeb1a0!2z0JHRltCx0LvRltC-0YLQtdC60LAgItCU0LbQtdGA0LXQu9C-Ig!5e0!3m2!1suk!2sua!4v1690991967903!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Петрицького, 5\\9, Бібліотека ім.Рибака для юнацтва',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.268039684005!2d30.37743134092604!3d50.454733199342286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc896481acd3%3A0x8338a3c743d21de8!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvCDQnS7QoNC40LHQsNC60LA!5e0!3m2!1suk!2sua!4v1690992158014!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Підлісна, 3, Бібліотека ім.Стефаника',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.6698672608181!2d30.337105747100935!3d50.472018749760906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccb5e4cd379f%3A0x6c810dc2435e466c!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JIuINCh0YLQtdGE0LDQvdC40LrQsA!5e0!3m2!1suk!2sua!4v1690992306391!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Зодчих, 6, Бібліотека ім.Махтумкулі',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.1962766456559!2d30.383892222560803!3d50.41515737787104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbea69354735%3A0x5214e99bd1595ebc!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JzQsNGF0YLRg9C80LrRg9C70ZY!5e0!3m2!1suk!2sua!4v1690992364482!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Краснова, 12, Бібліотека ім.Герцена',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.0048872714189!2d30.372230933660123!3d50.45936065227459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc8d85f148e5%3A0x40a5cd8fcf89abd1!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0J4uINCT0LXRgNGG0LXQvdCw!5e0!3m2!1suk!2sua!4v1690992413693!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Гната Юри, 5, Бібліотека ім.Блока',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.7195190363448!2d30.384445834205057!3d50.43292242463842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb89046e5d35%3A0x495b327e33bc7658!2z0JHRltCx0LvRltC-0YLQtdC60LAg0ZbQvC4g0JAg0JHQu9C-0LrQsA!5e0!3m2!1suk!2sua!4v1690992468429!5m2!1suk!2sua'
    },
    {
      city: 'Київ',
      address: 'Жюля Верна, 13Б, ЦРБ ЦБС Свічадо / 098 4324166',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.6842662400836!2d30.364166718862474!3d50.43423584134286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb82452c5a03%3A0xd1a6059ca43619ac!2z0KbQtdC90YLRgNCw0LvRjNC90LAg0YDQsNC50L7QvdC90LAg0LHRltCx0LvRltC-0YLQtdC60LAg0KHQstGW0YfQsNC00L4!5e0!3m2!1suk!2sua!4v1690992563785!5m2!1suk!2sua'
    },
    {
      city: 'Неграші',
      address: 'Шевченка, 23А / 067 7267663',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.8585121514122!2d30.075038661243415!3d50.38090726226629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b4bd13a59c037%3A0x50fb8cb67858dc1!2z0JHRg9C00LjQvdC-0Log0LrRg9C70YzRgtGD0YDQuA!5e0!3m2!1suk!2sua!4v1690992746919!5m2!1suk!2sua'
    },
    {
      city: 'Музичі',
      address: 'Музична, 2Б / 050 716 8173',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.3586573236723!2d30.11070757612311!3d50.35844964924475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b4b29acbdba27%3A0xa506af680c1eed7b!2z0LLRg9C7LiDQnNGD0LfQuNGH0L3QsCwgMtCRLCDQnNGD0LfQuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgxMjU!5e0!3m2!1suk!2sua!4v1690992991181!5m2!1suk!2sua'
    },
    {
      city: 'Гореничі',
      address: 'Соборна, 203 / 096 7965393',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.609926131048!2d30.204768097452998!3d50.41427877991103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b356dd58e97f7%3A0x22527ef09d520937!2z0KPQn9CmINCg0ZbQt9C00LLQsCDQn9GA0LXRgdCy0Y_RgtC-0Zcg0JHQvtCz0L7RgNC-0LTQuNGG0ZYsINCy0YPQu9C40YbRjyDQodC-0LHQvtGA0L3QsCwgMjAzLCDQk9C-0YDQtdC90LjRh9GWLCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4MTE0!5e0!3m2!1suk!2sua!4v1690993051101!5m2!1suk!2sua'
    },
    {
      city: 'Лука',
      address: 'Шевченка, 24 / 067 409 3918',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.3327317571346!2d24.031105945056236!3d49.83623921016621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add600d574941%3A0x5be2d1f651a92a3f!2sMakarus!5e0!3m2!1suk!2sua!4v1690993432847!5m2!1suk!2sua'
    },
    {
      city: 'Білогородка',
      address: 'Володимирська, 60А / 098 2742655',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.4271166396056!2d30.23208251791339!3d50.392858285113824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3554ceb61691%3A0x82d45592df4ce741!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNGB0YzQutCwLCA2MCwg0JHRltC70L7Qs9C-0YDQvtC00LrQsCwg0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LsuLCAwODE0MA!5e0!3m2!1suk!2sua!4v1690993216616!5m2!1suk!2sua'
    },
    {
      city: 'Святопетрівське',
      address: 'Центральна, 38 / 097 3541907',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.9263643027506!2d30.313426752428473!3d50.39068906507875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca5fa60f32e9%3A0xa476ce7f2a208e8f!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCAzOCwg0KHQstGP0YLQvtC_0LXRgtGA0ZbQstGB0YzQutC1LCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4sIDA4MTQx!5e0!3m2!1suk!2sua!4v1690993272604!5m2!1suk!2sua'
    },
    {
      city: 'Ірпінь',
      address: 'Мінеральна, 2, Санаторій "Дубки"',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.0914752528035!2d30.242075239461627!3d50.53076763627751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b3229c32ab167%3A0xfc8098a3509e1add!2z0KHQsNC90LDRgtC-0YDRltC5ICLQlNGD0LHQutC4Ig!5e0!3m2!1suk!2sua!4v1690993327311!5m2!1suk!2sua'
    }
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDefaultAddress = () => {
    const defaultAddress = addresses.find(
      (address) => address.city === selectedCity
    );
    return defaultAddress ? defaultAddress.link : addresses[0].link;
  };

  useEffect(() => {
    setSelectedAddress(getDefaultAddress());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  useEffect(() => {
    setSelectedAddress(getDefaultAddress());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  const uniqueCities = [...new Set(addresses.map((address) => address.city))];

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <section className={styles.address}>
      <Container className={styles['address-container']}>
        <h2 className={styles['address-title']}>
          Адреси видачі та прийому гуманітарної допомоги
        </h2>
        <div className={styles['address-map-wrapper']}>
          <div className={styles['address-inputs']}>
            <div className={styles['select-city-wrapper']}>
              <select
                className={`${styles['address-select']} ${styles['address-select-city']}`}
                value={selectedCity}
                onChange={handleCityChange}>
                <option value="" disabled hidden>Місто</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <select
              className={styles['address-select']}
              value={selectedAddress}
              onChange={handleAddressChange}>
              <option value="" disabled hidden>Адреса</option>
              {addresses
                .filter((address) => address.city === selectedCity)
                .map((address, index) => (
                  <option key={index} value={address.link}>
                    {address.address}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles['address-map']}>
            {selectedAddress && (
              <iframe
                title="Google Map"
                width="600"
                height="310"
                frameBorder="0"
                style={{ border: 0 }}
                src={selectedAddress}></iframe>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Address;
