import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

const Categories = () => {
  const placeholderCategories = () => {
    let placeholders = [];
    for (let i = 0; i < 11; i += 1) {
      placeholders.push(<Category text="Lorem ipsum" />);
    }
    return placeholders;
  };

  return (
    <div className="col-2" id="categories">
      <div className="container-header">
        <h1>Categories</h1>
      </div>
      <Category text="All Communities" active={true} />
      {placeholderCategories()}
      <button className="show-more-categories">Show More</button>
    </div>
  );
};

export default Categories;
