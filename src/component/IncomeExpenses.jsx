import React, { useContext } from "react";  

import {globalContext}  from '../context/GlobalCxt'

const IncomeExpenses = () => { 

  const { transction } = useContext(globalContext) 

  const amount = transction.map(trans=> trans.amount) //[-20,300,-10,150]  



  const reducer = (acc,item) =>  acc + item   

  const income =  amount
  .filter(item => item > 0 )  //[300,150]
  .reduce(reducer,0).toFixed(2) 
    
    // console.log(income);
    


    const expense =  (amount
  .filter(item => item < 0 )  //[-20,-10]
  .reduce(reducer,0).toFixed(2) ) * -1 

 console.log(expense);  



    
    return ( 

        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${expense}</p>
        </div>
      </div>
      
    )
}

export default IncomeExpenses
