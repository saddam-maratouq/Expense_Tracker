import React from 'react' 




const Transaction = ({trans}) => { 

    const Sign = trans.amount < 0  ? '-' : '+' 

    const classCouler = trans.amount < 0  ? 'minus' : 'plus' 

    return ( 

        <li className={classCouler} > 

          {trans.text} <span> {Sign} $ {Math.abs(trans.amount )}  </span> 

          <button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
