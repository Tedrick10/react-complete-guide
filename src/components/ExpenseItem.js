// React: Existing Libraries
import React from "react";

// Components
import Card from "./Card";
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
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
