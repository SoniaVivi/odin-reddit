import React, { useState } from "react";
import PropTypes from "prop-types";
import PosterTime from "./shared/PosterTime";
import ScoreDisplay from "./shared/ScoreDisplay";
import onOutsideClick from "./shared/onOutsideClick";
import PostPopupMenu from "./postsShow/PostPopupMenu";

const Post = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayThis, setDisplayThis] = useState(null);
  const checkPostType = (type) => props.data.post_type == type;
  const formattedLink = () => {
    const link = props.data.subject.url;
    const topLevelDomain = link.match(/\.\w{2,3}\b/)[0];
    const maxLength = link.indexOf(topLevelDomain) + topLevelDomain.length + 7;
    if (link.length <= maxLength) {
      return link;
    }
    return link.slice(0, maxLength) + "...";
  };
  const getLinkImg = () => <img className="post-thumbnail"></img>;

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
          <h1 className={checkPostType("Link") ? "link-post" : ""}>
            {props.data.title}
          </h1>
          {checkPostType("Link") ? (
            <a className="post-link" href={props.data.subject.url}>
              {formattedLink()}
            </a>
          ) : (
            ""
          )}
          {checkPostType("Text") ? <p>{props.data.subject.description}</p> : ""}
        </div>
        <div className="post-image">
          {checkPostType("Link") ? getLinkImg() : ""}
        </div>
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
