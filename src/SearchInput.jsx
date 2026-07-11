import React, { useMemo } from "react";
import withRenderTracker from "./WithRenderTracker";

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

export default React.memo(withRenderTracker(SearchInput));
