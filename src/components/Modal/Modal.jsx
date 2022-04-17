import React from 'react';
import { Mod } from './Modal.styles';

function Modal({ imageObj }) {
  return (
    <div>
        {imageObj.hits.map(({id, largeImageURL})=>
      <Mod key={id}>
        <img src={largeImageURL} alt="piacture" />
      </Mod>)}
    </div>
  );
}

export default Modal;
