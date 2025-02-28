import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for classic games..."
      className="search-bar"
      style={{ fontFamily: '"Press Start 2P", cursive', fontSize:"0.6rem"}}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
