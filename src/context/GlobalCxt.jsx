import React, {createContext, useReducer} from 'react'    
import {AppReducer} from './AddReducer' 



const initialState =  {

    transction : [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}
    
   


 export  const globalContext = createContext(initialState)   





function GlobalProvider({children}) { 

    const [state,dispatch] = useReducer(AppReducer,initialState)  


    const value = { transction : state.transction }

    return ( 
     <globalContext.Provider  value={value }>
         {children} 
     </globalContext.Provider>
    )
}

export default GlobalProvider;   