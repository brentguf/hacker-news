import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

const Search = (props) => {
  const {
    children,
    onSubmit,
    onInputChange,
    searchTerm
  } = props;

  return (
    <form onSubmit={onSubmit}>
      <input
        value={searchTerm}
        onChange={onInputChange}
        type="text" />
      <button type="submit">{children}</button>
    </form>
  );
}   

export default Search;