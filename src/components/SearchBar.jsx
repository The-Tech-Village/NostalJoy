import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for classic games..."
      className="search-bar"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
