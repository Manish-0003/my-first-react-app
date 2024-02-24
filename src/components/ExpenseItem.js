import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from "./Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('Clicked');
  };
  const deleteHandler = () => {
    const expenseItme = document.querySelector('.expense-item');
    ExpenseItem.remove();
  };
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete 
      </button>
    </Card>
  );
}

export default ExpenseItem;
