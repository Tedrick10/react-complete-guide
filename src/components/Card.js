// React: Existing Libraries
import React from "react";

// CSS
import "./Card.css";

// Card Method
const Card = (props) => {
  // CSS: Method Properties
  const classes = "card " + props.className;

  // Returning JSX Components
  return <div className={classes}>{props.children}</div>;
};

export default Card;
