import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGaller } from './ImageGallery.styles';
import ImageGallaryItem from '../ImageGalleryItem/ImageGallaryItem';

export default class ImageGallery extends Component {


  render(){
    const {imageObj} = this.props
  return (
    <div>
      <ImageGaller>
        {imageObj.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGallaryItem
            key={id}
            srcWeb={webformatURL}
            modal={largeImageURL}
          />
        ))}
      </ImageGaller>
    </div>
  )}}

ImageGallery.propTypes = {
  imageObj: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,

}

