import React, { useState } from "react";
import PropTypes from "prop-types";
import PosterTime from "../shared/PosterTime";
import ScoreDisplay from "../shared/ScoreDisplay";
import CommentEditor from "./CommentEditor";
import UserAccountModal from "../userAccountModal/UserAccountModal";

const Comment = (props) => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className={"comment-container" + props.className}>
      <div className="user-icon-container">
        <img
          className={"user-icon" + props.className}
          src={require("../../../assets/images/test-user-icon.png")}
          width="24"
          height="24"
        ></img>
        <div className="comment-nesting-line"></div>
      </div>
      <div className="comment-body-container row">
        <div className="poster-time-container">
          <PosterTime
            poster={props.data.poster}
            time={props.data.created_at}
          ></PosterTime>
        </div>
        <div>{props.data.body}</div>
        <div className="utility-buttons">
          <ScoreDisplay
            score={props.data.score}
            type="Comment"
            id={props.data.id}
            voteType={props.data.vote_type}
            loggedIn={props.logged_in}
          ></ScoreDisplay>
          <button onClick={() => setShowEditor((prevState) => !prevState)}>
            Reply
          </button>
          <button>Share</button>
          <button>Report</button>
          <button>Save</button>
        </div>
        {showEditor
          ? (() => {
              if (props.logged_in == true) {
                return (
                  <CommentEditor
                    data={
                      !props.logged_in
                        ? null
                        : {
                            poster_id: props.current_user_id,
                            post_id: props.post_id,
                            parent_id: props.data.id,
                          }
                    }
                    logged_in={props.logged_in ? true : false}
                    top_level={false}
                  ></CommentEditor>
                );
              } else if (props.logged_in == false) {
                return (
                  <UserAccountModal
                    type="signup"
                    disableButtonMode="true"
                    exit={() => setShowEditor((prevState) => !prevState)}
                  ></UserAccountModal>
                );
              }
            })()
          : ""}
        {props.children ? props.children : ""}
      </div>
    </div>
  );
};

export default Comment;
