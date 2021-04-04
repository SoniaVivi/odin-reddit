import React from "react";
import PropTypes from "prop-types";

const TextPostEditor = (props) => {
  return (
    <div className={props.classNames}>
      <div className="editor-markup-buttons">
        <div>
          <div>
            <button>B</button>
            <button>i</button>
            <button>L</button>
            <button>ST</button>
            <button>{"</>"}</button>
            <button>A</button>
            <button>!</button>
          </div>
          <div>
            <button>T</button>
            <button>BL</button>
            <button>NL</button>
            <button>"</button>
            <button>CB</button>
          </div>
          <div>
            <button>TAB</button>
            <button>IMG</button>
            <button>VID</button>
          </div>
        </div>
        <button className="markdown-button">Markdown Mode</button>
      </div>
      <textarea
        placeholder="Text (required)"
        onFocus={() => props.onFocus("text-post-editor focus")}
        onBlur={() => props.onFocus("text-post-editor")}
        minLength="1"
        maxLength="10000"
        onChange={(event) => {
          if (event.target.validity.valid) {
            props.setPostData({ description: event.target.value });
          } else {
            props.setPostData("");
          }
        }}
      ></textarea>
    </div>
  );
};

export default TextPostEditor;
