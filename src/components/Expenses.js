// React: Existing Libraries
import React from "react";

// Components
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

// CSS
import "./Expenses.css";

// Expenses Method
const Expenses = (props) => {
  // Returning JSX Components
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem date={item.date} name={item.title} price={item.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
