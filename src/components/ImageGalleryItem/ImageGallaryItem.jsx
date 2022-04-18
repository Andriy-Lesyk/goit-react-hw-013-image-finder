import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { ImageGalleryIt, ImageGalleryItemImg } from './ImageGalleryItem.styles';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.setState({ showModal: false });
      console.log('works');
    }
  };

  render() {
    const { src, modal } = this.props;
    return (
      <ImageGalleryIt onClick={this.openModal}>
        <ImageGalleryItemImg src={src} alt="foto" />
        {this.state.showModal && (
          <Modal
            modal={modal}
            onClick={this.handleBackdropClick}
            onClose={this.closeModal}
          />
        )}
      </ImageGalleryIt>
    );
  }
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
