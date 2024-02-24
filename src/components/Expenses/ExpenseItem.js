import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "../Card";

function ExpenseItem(props) {
  const [title, setTitle]= useState(props.title);
  console.log('Expense Item evaluated by React');

  
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  const deleteHandler = () => {
    const expenseItme = document.querySelector('.expense-item');
    ExpenseItem.remove();
  };
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete 
      </button>
    </Card>
  );
}

export default ExpenseItem;
