import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, SearchBarWrapper } from './Seach.style';
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <SearchBarWrapper>
            <StyledSearchBar
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </SearchBarWrapper>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;