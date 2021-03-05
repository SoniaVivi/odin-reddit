import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment.js";

const CommentSection = (props) => {
  const calcClassName = () => (props.isTopLevel ? " top-level" : " nested");
  return (
    <React.Fragment>
      {props.comments.map((nestedComments) => {
        if (nestedComments.length === 1) {
          return (
            <div className={"comment col-11" + calcClassName()}>
              <Comment
                data={nestedComments[0]}
                className={calcClassName()}
              ></Comment>
            </div>
          );
        } else {
          let children = (
            <div className="nested-comment-container row">
              <CommentSection comments={nestedComments[1]}></CommentSection>
            </div>
          );
          return (
            <div className={"comment col-11" + calcClassName()}>
              <Comment
                data={nestedComments[0]}
                className={calcClassName()}
                children={children}
              ></Comment>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

export default CommentSection;
