import React, { useContext } from "react"; 
import { globalContext} from '../context/GlobalCxt'
import Transaction from "./Transaction";

const TransactionList = () => { 

  const {transction } = useContext(globalContext)

console.log(transction); 


  return (
    <> 

      <h3>History</h3>
      <ul  className="list">
       {
         transction.map(trans => ( 

          <Transaction   key={trans.id}    trans={trans}  /> 
              
         ))
       }
      </ul> 
      
    </>
  );
};

export default TransactionList;
