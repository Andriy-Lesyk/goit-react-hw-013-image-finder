import React from 'react';
import { ImageGalleryIt, ImageGalleryItemImg } from './ImageGalleryItem.styles';

function ImageGallaryItem({src, onClick}) {
  return (
    <ImageGalleryIt onClick={onClick}>
      <ImageGalleryItemImg src={src} alt='foto'/>
    </ImageGalleryIt>
  );
}

export default ImageGallaryItem;
