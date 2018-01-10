import React from 'react';

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