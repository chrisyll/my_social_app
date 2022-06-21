import React, { useCallback, useState } from "react";
import classes from "./PostItem.module.css";
import HeartIcon from "../../../assets/icons/Heart_Icon.png";
import HeartActiveIcon from "../../../assets/icons/Heart_Active_Icon.png";
import CommentIcon from "../../../assets/icons/Comment_Icon.png";
import ProfileIcon from "../../../assets/icons/Profile_Icon.png";

//Receive PostedBy, Media, NumLikes, LikedBy, Caption, Comments, TimePosted
const PostItem = () => {
  const [height, setHeight] = useState(0);
  const [commentInput, setCommentInput] = useState("");

  //this is called for every post we render but
  //it should only be called once and set the same height for every post
  const ref = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().width);
    }
  }, []);

  const handleInput = (e) => {
    setCommentInput(e.target.value);
  };

  return (
    <div className={classes.PostItem}>
      <div className={classes.PostItemInfo}>
        <img src={ProfileIcon} alt="profile icon" />
        <div style={{ fontSize: "14px", fontWeight: "600", marginLeft: "8px" }}>
          name
        </div>
      </div>
      <div
        className={classes.PostItemMedia}
        ref={ref}
        style={{ height, backgroundColor: "grey" }}
      ></div>
      <div className={classes.PostItemOptions}>
        <div style={{ marginBottom: "6px" }}>
          <img
            src={HeartIcon}
            alt="like button"
            style={{ marginRight: "20px" }}
          />
          <img src={CommentIcon} alt="comment button" />
        </div>
        <div style={{ fontWeight: "600", margin: "8px 0" }}> X *likes </div>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ fontWeight: "600" }}> Name </span>
          *caption
        </div>
        <div
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            opacity: "60%",
          }}
        >
          Y minutes ago
        </div>
      </div>
      <div className={classes.PostAddComment}>
        <input
          placeholder="Add a comment.."
          onChange={(event) => handleInput(event)}
        />
        <button
          style={
            commentInput.length === 0
              ? { opacity: "0.3", cursor: "default" }
              : { opacity: "0.7", cursor: "pointer" }
          }
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostItem;
