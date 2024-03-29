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
            <div className={"comment" + calcClassName()}>
              <Comment
                data={nestedComments[0]}
                className={calcClassName()}
                logged_in={props.logged_in}
                current_user_id={props.current_user_id}
                post_id={props.post_id}
              ></Comment>
            </div>
          );
        } else {
          let children = (
            <div className="nested-comment-container row">
              <CommentSection
                comments={nestedComments[1]}
                logged_in={props.logged_in}
                current_user_id={props.current_user_id}
                post_id={props.post_id}
              ></CommentSection>
            </div>
          );
          return (
            <div className={"comment" + calcClassName()}>
              <Comment
                data={nestedComments[0]}
                className={calcClassName()}
                children={children}
                logged_in={props.logged_in}
                current_user_id={props.current_user_id}
                post_id={props.post_id}
              ></Comment>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

export default CommentSection;
