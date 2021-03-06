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

  render() {
    const { srcWeb, modal } = this.props;
    return (
      <div>
        <ImageGalleryIt onClick={this.openModal}>
          <ImageGalleryItemImg src={srcWeb} alt="foto" />
        </ImageGalleryIt>
        {this.state.showModal && (
          <Modal modal={modal} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
ImageGalleryItem.propTypes = {
  srcWeb: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired
};
