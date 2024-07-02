import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, darkMode }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search bikes..."
      value={searchQuery}
      onChange={handleSearchChange}
      className={`border px-4 py-2 rounded-md w-full max-w-md ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    />
  );
};

export default SearchBar;