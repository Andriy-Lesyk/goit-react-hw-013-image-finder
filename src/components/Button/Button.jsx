import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

function Button({ onClick, page }) {
  return (
    <Btn onClick={onClick} page={page}>
      Load more
    </Btn>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
export default Button;
