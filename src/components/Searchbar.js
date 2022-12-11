import React from "react";

const Searchbar = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for the goals..."
      className="search-bar"
      onChange={onChange}
    />
  );
};

export default Searchbar;
