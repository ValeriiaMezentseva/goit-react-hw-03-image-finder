import { Item, Image } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';
import { Component } from "react";
import Modal from "components/Modal";


class ImageGalleryItem extends Component{
  state = {
    showModal: false,
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    }; 
    
render() {
    const { showModal } = this.state;
    const { largeImageURL, webformatURL, tags } = this.props;

    return (
      <>
        <Item onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        {showModal && (
          <Modal toggle={this.toggleModal} image={largeImageURL} tags={tags} />
        )}
      </>
    );
  }
};

export default ImageGalleryItem; 

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired, 
  };