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

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { modal } = this.props;
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <Mod>
          <img src={modal} alt="foto" />
        </Mod>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
};
