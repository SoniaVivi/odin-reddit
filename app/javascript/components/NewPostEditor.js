import React, { useState } from "react";
import PropTypes from "prop-types";
import NewPostMenu from "./postsNew/NewPostMenu";
import TextPostEditor from "./postsNew/TextPostEditor";
import sendAjaxRequest from "./shared/sendAjaxRequest";

const NewPostEditor = (props) => {
  const [activePostTab, setActivePostTab] = useState("Post");
  const changeActiveTab = (text) => setActivePostTab(text);
  const getTabClasses = (text) =>
    `new-post-type-menu${text == activePostTab ? " active" : ""}`;
  const [textPostClasses, setTextPostClasses] = useState("text-post-editor");
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("text");
  const [postData, setPostData] = useState("");

  return (
    <React.Fragment>
      <div className="heading-container">
        <h1>Create a post</h1>
        <button>Drafts</button>
      </div>
      <div classname="new-post-editor-container">
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
            <TextPostEditor
              onFocus={setTextPostClasses}
              classNames={textPostClasses}
              setDescription={setPostData}
            ></TextPostEditor>
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
                        description: postData,
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
