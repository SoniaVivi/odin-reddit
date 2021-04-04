import React, { useState } from "react";
import PropTypes from "prop-types";
import NewPostMenu from "./postsNew/NewPostMenu";
import TextPostEditor from "./postsNew/TextPostEditor";
import LinkPostEditor from "./postsNew/LinkPostEditor";
import sendAjaxRequest from "./shared/sendAjaxRequest";

const NewPostEditor = (props) => {
  const [activePostTab, setActivePostTab] = useState("Post");
  const [postClassNames, setPostClassNames] = useState("text-post-editor");
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("Text");
  const [postData, setPostData] = useState("");
  const changeActiveTab = (text) => {
    const post_types = {
      Post: "Text",
      Link: "Link",
      "Images and Video": "Image",
    };
    const classNames = {
      Post: "text-post-editor",
      Link: "link-post-editor",
      "Images and Video": "image-post-editor",
    };
    setPostClassNames(classNames[text]);
    setPostType(post_types[text]);
    setActivePostTab(text);
  };
  const getTabClasses = (text) =>
    `new-post-type-menu${text == activePostTab ? " active" : ""}`;
  const getEditor = () => {
    if (postType == "Text") {
      return (
        <TextPostEditor
          onFocus={setPostClassNames}
          classNames={postClassNames}
          setPostData={setPostData}
        ></TextPostEditor>
      );
    } else if (postType == "Link") {
      return (
        <LinkPostEditor
          onFocus={setPostClassNames}
          classNames={postClassNames}
          setPostData={setPostData}
        ></LinkPostEditor>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="heading-container">
        <h1>Create a post</h1>
        <button>Drafts</button>
      </div>
      <div className="new-post-editor-container">
        <button className="origin-selector">f/{props.originName}</button>
        <div className="new-post-editor">
          <NewPostMenu
            tabsText={["Post", "Images and Video", "Link", "Poll"]}
            classFunc={getTabClasses}
            clickFunc={changeActiveTab}
          ></NewPostMenu>
          <input
            placeholder="Title"
            onChange={(event) => {
              if (event.target.validity.valid) {
                setTitle(event.target.value);
              } else {
                setTitle("");
              }
            }}
            minLength="1"
            maxLength="300"
          ></input>
          <div>
            {getEditor()}
            <div className="post-buttons-wrapper">
              <div className="post-tags-container">
                <button>+ OC</button>
                <button>+ Spoiler</button>
                <button>+ NSFW</button>
                <button>Flair</button>
              </div>
              <div className="submission-buttons-container">
                <button className="save-draft">Save Draft</button>
                <button
                  className="submit post"
                  onClick={() => {
                    if (title != "" && postData != "")
                      sendAjaxRequest("POST", `/f/${props.originName}/submit`, {
                        post_title: title,
                        post_type: postType,
                        ...postData,
                      })
                        .then((response) => {
                          if (response.success == false) {
                            return;
                          }
                          window.location.href = response.post;
                        })
                        .catch((e) => console.log(e));
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="new-post-footer">
            <p>Send me post reply notifications</p>
            <a>Connect accounts to share your post</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPostEditor;
