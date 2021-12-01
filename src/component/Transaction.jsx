import React from 'react' 




const Transaction = ({trans}) => { 

    const Sign = trans.amount < 0  ? '-' : '+' 

    return ( 

        <li className="minus" > 

          {trans.text} <span> {Sign} ${trans.amount} </span> 

          <button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
