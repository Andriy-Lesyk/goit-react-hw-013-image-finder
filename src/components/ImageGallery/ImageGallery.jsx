import React from 'react';
import { ImageGaller, Div } from './ImageGallery.styles';
import ImageGallaryItem from '../ImageGalleryItem/ImageGallaryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

function ImageGallery({
  imageObj,
  onClick,
  page,
  loading,
  onToggle,
  showModal,
}) {
  return (
    <div>
      <ImageGaller>
        {imageObj.hits.map(({ id, webformatURL }) => (
          <ImageGallaryItem
            key={id}
            src={webformatURL}
            alt="foto"
            onClick={onToggle}
          />
        ))}
      </ImageGaller>
      <Div>
        <Button onClick={onClick} page={page} />
        {loading && <Loader />}
      </Div>
      {showModal && <Modal imageObj={imageObj} />}
    </div>
  );
}

export default ImageGallery;
