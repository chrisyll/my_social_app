import React from "react";
import { ReactComponent as SearchLogo } from "../../assets/icons/Search_Icon.svg";
import classes from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const searchIconHolder = (
    <div className={classes.SearchIcon}>
      <SearchLogo />
    </div>
  );

  const [searchIcon, setSearchIcon] = useState(searchIconHolder);

  const handleFocus = () => {
    setSearchIcon(null);
  };

  const handleFocusOut = () => {
    setSearchIcon(searchIconHolder);
  };

  return (
    <div className={classes.SearchBarContainer}>
      {searchIcon}
      <input
        label="search-input"
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleFocusOut}
        className={classes.SearchBarInput}
      />
    </div>
  );
};

export default SearchBar;
