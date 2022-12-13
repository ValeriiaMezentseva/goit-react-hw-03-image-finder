import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <ThreeDots color=" #b48c73" height={80} width={80} />
        </LoaderBox>
    )
};

export default Loader; 