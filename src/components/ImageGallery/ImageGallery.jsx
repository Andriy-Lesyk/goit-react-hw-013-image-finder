import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGaller } from './ImageGallery.styles';
import ImageGallaryItem from '../ImageGalleryItem/ImageGallaryItem';

export default class ImageGallery extends Component {
  render() {
    const { imageArray } = this.props;
    return (
      <div>
        <ImageGaller>
          {imageArray.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGallaryItem
              key={id}
              srcWeb={webformatURL}
              modal={largeImageURL}
            />
          ))}
        </ImageGaller>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  imageArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  )
};
