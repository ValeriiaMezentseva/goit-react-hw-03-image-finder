import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent, Image } from "./Modal.styled";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    };
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    };

    onKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggle();
        };
    };
        clickOnBackdrop = e => {
            if (e.target === e.currentTarget) {
                this.props.toggle();
            };
        };

        render() {
            const { image, tags } = this.props;

            return createPortal(
                <Backdrop onClick={this.clickOnBackdrop}>
                    <ModalContent>
                        <Image src={image} alt={tags} />
                    </ModalContent>
                </Backdrop>,
                modalRoot
            );
        }

};

export default Modal; 

Modal.propTypes = {
    image: PropTypes.string.isRequired, 
    tags: PropTypes.string.isRequired, 
}