import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'
const initialState={
    transactions: [
        { id: 1,transactionType:'Income', amount: -20 , text: 'Flower',date:12/16/2023},
        { id: 2,transactionType:'Income' , amount: 220 ,text: 'Salary',date:12/16/2023}
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
    
      function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}