import React, { Component } from 'react';
import { Mod, Overlay } from './Modal.styles';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { modal, onClick } = this.props;
    return (
      <Overlay onClick={onClick}>
        <Mod>
          <img src={modal} alt="peacture" />
        </Mod>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
};
