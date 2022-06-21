import React from "react";
import classes from "./Posts.module.css";
import PostItem from "./PostItem/PostItem";

const Posts = () => {
  return (
    <div className={classes.Posts}>
      <PostItem />
      <PostItem />
    </div>
  );
};

export default Posts;
