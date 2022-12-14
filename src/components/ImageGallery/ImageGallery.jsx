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
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default ImageGallery; 
