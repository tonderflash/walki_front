import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, SearchBarWrapper } from './Seach.style';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [lastSearchedQuery, setLastSearchedQuery] = useState('');

    useEffect(() => {
        // Set a timeout to update the debounced query
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500); // Adjust debounce time as needed

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        // Trigger search only if the debounced query is different from the last searched query
        if (debouncedQuery && debouncedQuery !== lastSearchedQuery) {
            onSearch(debouncedQuery); // Trigger the search callback
            setLastSearchedQuery(debouncedQuery); // Update the last searched query
        }
    }, [debouncedQuery, lastSearchedQuery, onSearch]);

    const handleInputChange = (e) => {
        const capitalizedQuery = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setQuery(capitalizedQuery);
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