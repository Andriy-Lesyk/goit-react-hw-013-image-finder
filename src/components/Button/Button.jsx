import React from 'react';
import { Btn } from './Button.styles';

function Button({onClick, page}) {
  return <Btn onClick={onClick} page={page}>Load more</Btn>;
}

export default Button;
