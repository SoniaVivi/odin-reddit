import React from "react";
import PropTypes from "prop-types";

const LinkPostEditor = (props) => {
  const validUrl = (str) => {
    //https://stackoverflow.com/a/5717133
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  return (
    <textarea
      className={props.classNames}
      placeholder="Url"
      onFocus={() => props.onFocus("link-post-editor focus")}
      onBlur={() => props.onFocus("link-post-editor")}
      onChange={(event) => {
        if (validUrl(event.target.value)) {
          props.setPostData({ url: event.target.value });
        } else {
          props.setPostData("");
        }
      }}
    ></textarea>
  );
};

export default LinkPostEditor;
