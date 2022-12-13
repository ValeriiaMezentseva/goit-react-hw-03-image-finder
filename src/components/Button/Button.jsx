import Proptypes from 'prop-types'; 
import { ButtonLoadMore, ButtonBox } from './Button.styled';

const Button = ({ onClick }) => {
    
    return (
        <ButtonBox>
            <ButtonLoadMore type='button' onClick={onClick}> Load more </ButtonLoadMore>
            </ButtonBox>
    )
};

Button.propTypes = {
    onClick: Proptypes.func.isRequired, 
}

export default Button; 