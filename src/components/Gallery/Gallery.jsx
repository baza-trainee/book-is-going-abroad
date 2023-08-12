import { useState } from 'react';

import Container from '../layouts/Container/Container.jsx';
import styles from './Gallery.module.css';

import photo1 from '../../assets/img/gallery/photo1.jpg';
import photo2 from '../../assets/img/gallery/photo2.jpg';
import photo3 from '../../assets/img/gallery/photo3.jpg';
import photo4 from '../../assets/img/gallery/photo4.jpg';
import photo5 from '../../assets/img/gallery/photo5.jpg';
import photo6 from '../../assets/img/gallery/photo6.jpg';
import photo7 from '../../assets/img/gallery/photo7.jpg';
import photo8 from '../../assets/img/gallery/photo8.jpg';
import photo9 from '../../assets/img/gallery/photo9.jpg';
import photo10 from '../../assets/img/gallery/photo10.jpg';
import photo11 from '../../assets/img/gallery/photo11.jpg';
import photo12 from '../../assets/img/gallery/photo12.jpg';
import photo13 from '../../assets/img/gallery/photo13.jpg';
import photo14 from '../../assets/img/gallery/photo14.jpg';
import photo15 from '../../assets/img/gallery/photo15.jpg';
import photo16 from '../../assets/img/gallery/photo16.jpg';
import photo17 from '../../assets/img/gallery/photo17.jpg';
import photo18 from '../../assets/img/gallery/photo18.jpg';
import photo19 from '../../assets/img/gallery/photo19.jpg';

const images = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2' },
  { src: photo3, alt: 'Photo 3' },
  { src: photo4, alt: 'Photo 4' },
  { src: photo5, alt: 'Photo 5' },
  { src: photo6, alt: 'Photo 6' },
  { src: photo7, alt: 'Photo 7' },
  { src: photo8, alt: 'Photo 8' },
  { src: photo9, alt: 'Photo 9' },
  { src: photo10, alt: 'Photo 10' },
  { src: photo11, alt: 'Photo 11' },
  { src: photo12, alt: 'Photo 12' },
  { src: photo13, alt: 'Photo 13' },
  { src: photo14, alt: 'Photo 14' },
  { src: photo15, alt: 'Photo 15' },
  { src: photo16, alt: 'Photo 16' },
  { src: photo17, alt: 'Photo 17' },
  { src: photo18, alt: 'Photo 18' },
  { src: photo19, alt: 'Photo 19' }
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

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
          Активності нашої організації
        </h2>
        <div className={styles['gallery-wrapper']}>
          {images.map((image, index) => (
            <div
              className={styles['gallery-img-wrapper']}
              onClick={() => openModal(index)}
              key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
              />
              <span className={styles.closeModal} onClick={closeModal}>
                &times;
              </span>
            </div>
          </div>
        )}
        ;
      </Container>
    </section>
  );
};
export default Gallery;
