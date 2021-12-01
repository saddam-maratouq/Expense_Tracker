import React from 'react'
import './App.css'
import AddTransaction from './component/AddTransaction'
import Balnce from './component/Balnce'
import Header from './component/Header'
import IncomeExpenses from './component/IncomeExpenses'
import TransactionList from './component/TransactionList'

function App() {
 
  return (
    <div >
   <Header/> 
   <div className ='container'>
    <Balnce/>  
    <IncomeExpenses/> 
    <TransactionList/> 
    <AddTransaction/> 
   </div>
    </div>
  )
}

export default App
