import React from 'react';
import PropTypes from 'prop-types';
import { ImageGaller, Div } from './ImageGallery.styles';
import ImageGallaryItem from '../ImageGalleryItem/ImageGallaryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

function ImageGallery({ imageObj, onClick, page, loading }) {
  return (
    <div>
      <ImageGaller>
        {imageObj.hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGallaryItem
            key={id}
            id={id}
            src={webformatURL}
            modal={largeImageURL}
          />
        ))}
      </ImageGaller>
      <Div>
        <Button onClick={onClick} page={page} />
        {loading && <Loader />}
      </Div>
    </div>
  );
}
ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageObj: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ImageGallery;
