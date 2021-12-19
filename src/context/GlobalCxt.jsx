import React, {createContext, useReducer,useEffect } from 'react'    
import {AppReducer} from './AddReducer' 



const initialState =  {

    transction : [
      
    ]
}
    
   


 export  const globalContext = createContext(initialState)   





function GlobalProvider({children}) { 

    const [state,dispatch] = useReducer(AppReducer,initialState, () => {
        const localData = localStorage.getItem('trans');
        return localData ? JSON.parse(localData) : [] ;
    } )  


    


    useEffect(() => {

     localStorage.setItem('trans',JSON.stringify(state))   

    }, [state])



    const deletTransaction = (id) => {
        dispatch ({
            type : 'DELET_TRANS' ,
            paylod : id  
        })
    }
 

    const addTransaction = (transction) => {
        dispatch ({
            type : 'ADD_TRANS' ,
            paylod : transction 
        })

        
    }

    const value = { transction : state.transction , deletTransaction , addTransaction } 

    return ( 
     <globalContext.Provider  value={value }>
         {children} 
     </globalContext.Provider>
    )
}

export default GlobalProvider;   
