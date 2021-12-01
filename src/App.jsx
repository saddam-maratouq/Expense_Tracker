import React from 'react'
import './App.css'
import AddTransaction from './component/AddTransaction'
import Balnce from './component/Balnce'
import Header from './component/Header'
import IncomeExpenses from './component/IncomeExpenses'
import TransactionList from './component/TransactionList'
import GlobalProvider from './context/GlobalCxt'

function App() {
 
  return (
    <GlobalProvider >
   <Header/> 
   <div className ='container'>
    <Balnce/>  
    <IncomeExpenses/> 
    <TransactionList/> 
    <AddTransaction/> 
   </div>
    </GlobalProvider>
  )
}

export default App
