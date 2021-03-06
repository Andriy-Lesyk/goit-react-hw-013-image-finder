import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

function Button({ onClick }) {
  return <Btn onClick={onClick}>Load more</Btn>;
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
