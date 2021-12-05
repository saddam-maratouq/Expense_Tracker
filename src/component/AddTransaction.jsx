import React, { useContext, useState } from "react"; 


import {globalContext}  from '../context/GlobalCxt'




const AddTransaction = () => { 

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);  



  const { addTransaction} = useContext(globalContext) 



  const textHandler = (e) => {
    setText(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };


  const submitHandler = (e) => {
    e.preventDefault(); 

    const newTransaction = {

      id : Math.round(Math.random() *1000),   
      text , 
      amount : +amount 
    }  

    addTransaction(newTransaction) ;
  }



  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler} > 
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={textHandler}
            placeholder="Enter transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={amountHandler}
            placeholder="Enter amount..."
          />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
