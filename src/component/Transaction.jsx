import React, { useContext } from 'react' 

import {globalContext}  from '../context/GlobalCxt'




const Transaction = ({trans}) => {  

  const { deletTransaction} = useContext(globalContext) 
  




    const Sign = trans.amount < 0  ? '-' : '+' 

    const classCouler = trans.amount < 0  ? 'minus' : 'plus' 

    return ( 

        <li className={classCouler} > 

          {trans.text} <span> {Sign} $ {Math.abs(trans.amount )}  </span> 

          <button onClick={() => deletTransaction(trans.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
