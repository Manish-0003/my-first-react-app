import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const[enteredTitle, setEnteredTitle] = useState ('');
    const[EnteredAmount,setEnteredAmount] = useState('');
    const[EnteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    }
    
  return (
    <form>
      <div className="new-expense__controls">;</div>
      <div className="new-expense--control"></div>
      <label>Title</label>
      <input type="text"  onChange={titleChangeHandler} />
      <div className="new-expense--control"></div>
      <label>Amount</label>
      <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
      <div className="new-expense--control"></div>
      <label>Date</label>
      <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />

      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
        
      </div>
    </form>
  );
};
export default ExpenseForm;
