// React: Existing Libraries
import React from "react";

// Components
import Card from "./Card";

// CSS
import "./ExpenseDate.css";

// ExpenseDate Method
const ExpenseDate = (props) => {
  // Constant: Method Properties
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  // Returning JSX Components
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
