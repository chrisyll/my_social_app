import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import HomeIcon from "../../assets/icons/Home_Icon.png";
import ActiveHomeIcon from "../../assets/icons/Home_Active_Icon.png";
import MessagesIcon from "../../assets/icons/Messages_Icon.png";
import ActiveMessagesIcon from "../../assets/icons/Messages_Active_Icon.png";
import ProfileIcon from "../../assets/icons/Profile_Icon.png";
import classes from "./Menu.module.css";

const menu = () => {
  return (
    <div className={classes.MenuContainer}>
      <MenuItem linkTo="/">{<img src={ActiveHomeIcon} alt="home" />}</MenuItem>
      <MenuItem linkTo="/messages">
        {<img src={MessagesIcon} alt="messages" />}
      </MenuItem>
      <MenuItem linkTo="/profile">
        {<img src={ProfileIcon} alt="profile" />}
      </MenuItem>
    </div>
  );
};

export default menu;
