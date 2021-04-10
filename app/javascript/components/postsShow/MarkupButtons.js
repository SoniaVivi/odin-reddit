import React from "react";
import PropTypes from "prop-types";

const MarkupButtons = (props) => {
  const markupButton = (text) => (
    <button className="markup-button">{text}</button>
  );
  return (
    <div className="editor-buttons-container">
      <div className="text-formatting-buttons formatting-container">
        {markupButton("B")}
        {markupButton("I")}
        {markupButton("L")}
        {markupButton("ST")}
        {markupButton("</>")}
        {markupButton("A")}
        {markupButton("!")}
      </div>
      <div className="structural-formatting-buttons formatting-container">
        <button>H</button>
        <button>...</button>
      </div>
      {props.buttons}
    </div>
  );
};

export default MarkupButtons;
