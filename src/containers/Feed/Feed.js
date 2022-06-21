import React, { Component } from "react";
import classes from "./Feed.module.css";
import Stories from "../../components/Stories/Stories";
import Posts from "../../components/Posts/Posts";

class Feed extends Component {
  state = {};
  render() {
    return (
      <div className={classes.FeedContainer}>
        <Stories />
        <Posts />
      </div>
    );
  }
}

export default Feed;
