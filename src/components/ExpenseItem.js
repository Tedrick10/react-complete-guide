// React: Existing Libraries
import React from "react";

// Components
import ExpenseDate from "./ExpenseDate";

// CSS
import "./ExpenseItem.css";

// ExpenseItem Method
const ExpenseItem = (props) => {
  // Constant: Method Properties
  const expenseDate = props.date;
  const expenseName = props.name;
  const expensePrice = props.price;

  // Returning JSX Components
  return (
    <div className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
