import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import ContentLoader from './ImageLoader.jsx';

import Container from '../layouts/Container/Container.jsx';
// eslint-disable-next-line import/extensions
import { TranslateContext } from '../../contexts/translate-context.js';

import styles from './Gallery.module.css';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { translate } = useContext(TranslateContext);

  useEffect(() => {
    setLoading(false);
    // Make the API request to fetch images
    axios.get('https://openbookhands.site/admin/api/v1/photo/')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching images:', error);
      });
  }, []);

  const openModal = (imageIndex) => {
    setActiveImage(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <section className={styles.gallery}>
      <Container className={styles['gallery-container']}>
        <h2 className={styles['gallery-title']}>
          {translate('activity.title')}
        </h2>
        <div className={styles['gallery-wrapper']}>
          {loading
            ? <>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
              <div className={styles['gallery-img-wrapper']}><ContentLoader/></div>
            </> : (
              images.map((image, index) => (
            <div
              className={styles['gallery-img-wrapper']}
              onClick={() => openModal(index)}
              key={index}>
              <img src={image.image} alt={`photo${index}`} />
            </div>)))}
        </div>
        {modalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <img
                src={images[activeImage].image}
                alt='Photo'
              />
              <span className={styles.closeModal} onClick={closeModal}>
                &times;
              </span>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
export default Gallery;
