import { Gallery} from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {

    return (
        <Gallery>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id} {...image}
                />
            ))}
        </Gallery>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ImageGallery; 
