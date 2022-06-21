import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Menu from "../Menu/Menu";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <div className={classes.NavigationItemsContainer}>
      <div className={classes.NavigationFlexContainer}>
        <div className={classes.TitleContainer}>
          <Link className={classes.Title} to="/">
            Instaclone
          </Link>
        </div>
        <SearchBar />
        <Menu />
      </div>
    </div>
  );
};

export default navigationItems;
