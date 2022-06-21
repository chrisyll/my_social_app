import React from "react";
import classes from "./Stories.module.css";
import StoryItem from "./StoryItem/StoryItem";

const Stories = (props) => {
  return (
    <div className={classes.Stories}>
      <StoryItem />
    </div>
  );
};

export default Stories;
