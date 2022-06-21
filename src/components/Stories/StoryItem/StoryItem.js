import React from "react";
import classes from "./StoryItem.module.css";

//Has an Image, Name ~ onClick, Seen/NotSeen ~
const StoryItem = (props) => {
  let name = "Your story";

  return (
    <div className={classes.StoryItem}>
      <div className={classes.StoryImage}></div>
      <div className={classes.StoryName}>{name}</div>
    </div>
  );
};

export default StoryItem;
