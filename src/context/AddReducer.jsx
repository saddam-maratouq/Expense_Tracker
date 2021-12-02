

export const AppReducer = (state,action) => {


if (action.type ==='DELET_TRANS') { 
   return {
        ...state ,
        transction : state.transction.filter(trans => trans.id !== action.paylod)
   }
}

}

