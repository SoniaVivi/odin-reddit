import React, { useState } from "react";
import PropTypes from "prop-types";
import PosterTime from "./shared/PosterTime";
import ScoreDisplay from "./shared/ScoreDisplay";
import onOutsideClick from "./shared/onOutsideClick";
import PostPopupMenu from "./postsShow/PostPopupMenu";

const Post = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayThis, setDisplayThis] = useState(null);

  return (
    <React.Fragment>
      <ScoreDisplay
        score={props.data.score}
        type="Post"
        id={props.data.id}
        voteType={props.data.vote_type}
        loggedIn={props.loggedIn}
      ></ScoreDisplay>
      <div className="post-wrapper">
        <div className="post-details-container">
          <div className="poster-time-container">
            <a href={`/f/${props.data.origin}`} className="post-origin">
              f/{props.data.origin}
            </a>
            <PosterTime
              poster={props.data.poster}
              time={props.data.created_at}
            ></PosterTime>
          </div>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>
        <div className="post-image"></div>
        <div className="utility-buttons">
          <a href={`/f/${props.data.origin}/${props.data.id}`}>
            {props.data.comment_quantity} Comments
          </a>
          <button>Share</button>
          <button>Edit Post</button>
          <button>Save</button>
          <button>Hide</button>
          <div
            onClick={(e) =>
              onOutsideClick(e, () => setShowMenu((prevState) => !prevState))
            }
          >
            ...
            {showMenu ? (
              <PostPopupMenu
                postId={props.data.id}
                origin={props.data.origin}
                modal={(modal) => setDisplayThis(modal)}
              />
            ) : (
              ""
            )}
            {displayThis ? displayThis : ""}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
