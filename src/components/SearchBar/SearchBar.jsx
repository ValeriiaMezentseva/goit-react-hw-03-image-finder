import { SearchbarForm, Form, SearchFormButton, Input, LabelBtn } from "./SearchBar.styled";
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

const SearchBar = ({ onSubmit }) => {
    
    return (
        <SearchbarForm>
            <Form onSubmit={onSubmit}>
                <Input
                    type="text"
                    autocomplete="off"
                    placeholder="Search images and photos"
                    name="search" />
                <SearchFormButton type="submit">
                    <GoSearch size='18' />
                    <LabelBtn> </LabelBtn>
                </SearchFormButton>
            </Form>
        </SearchbarForm>
    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar; 