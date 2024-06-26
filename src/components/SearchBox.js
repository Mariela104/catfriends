import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <input 
      className="pa3 ba b--green bg-lightest-blue mb3"
      type="search" 
      placeholder="search cats"
      onChange={searchChange}
    />
  );
}

export default SearchBox;
