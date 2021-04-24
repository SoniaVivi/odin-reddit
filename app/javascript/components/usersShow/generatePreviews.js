import React, { useState } from "react";
import CommentPreview from "./CommentPreview";
import CommentPreviewHeader from "./CommentPreviewHeader";
import Post from "../Post";

const generatePreviews = (props) => {
  const generateCommentPreviews = (data) =>
    data.map((comment_data) => {
      const comment = (isChild = false) => (
        <CommentPreview data={comment_data.comment} isChild={isChild} />
      );
      if (comment_data.parent != null) {
        return (
          <CommentPreview data={comment_data.parent} nested={comment(true)} />
        );
      }
      return comment();
    });

  let previews = [];
  Object.entries(props.data)
    .reverse()
    .forEach(([key, data]) =>
      previews.push(
        <div className="comment-preview-container overview">
          {data.self_post && !props.omitPosts ? (
            <div className="post-container hover-outline no-border">
              <Post data={data.post} loggedIn={props.loggedIn} />
            </div>
          ) : (
            <CommentPreviewHeader
              user={data.comment_data[0].comment.poster}
              title={data.post.title}
              origin={data.origin}
              poster={data.post.poster}
            />
          )}
          {"comment_data" in data
            ? generateCommentPreviews(data.comment_data)
            : ""}
        </div>
      )
    );
  return previews;
};

export default generatePreviews;
