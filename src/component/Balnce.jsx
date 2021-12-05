import React, { useContext } from "react";  

import {globalContext}  from '../context/GlobalCxt'



const Balnce = () => { 

  const { transction } = useContext(globalContext) 

  const amount = transction.map(trans=> trans.amount) //[-20,300,-10,150]

  const reducer = (acc,item) => acc + item 

  const total = amount.reduce(reducer , 0 ).toFixed(2) 

  // console.log(total);



  return (  

    <>
      <h4>Your Balance</h4>  
      <h1 > ${total} </h1>
    </> 

  );
};

export default Balnce;
