import React, { useMemo } from "react";

const SearchInput = ({ handleSearch }) => {
  console.log("SearchInput rerendered");
  return (
    <input
      className="search-input"
      onChange={handleSearch}
      placeholder="Поиск..."
    />
  );
};

export default React.memo(SearchInput);
