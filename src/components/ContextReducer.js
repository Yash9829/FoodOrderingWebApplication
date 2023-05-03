import React, { createContext, useContext, useReducer } from 'react'

const OrderStateContext = createContext();
const OrderDispatchContext = createContext();

const  reducer = (state, action) => {

   switch(action.type) {

        case "Add" :
            return [...state, {id : action.id, quantity : action.quantity, price : action.price}];
        default :
            console.log("Error :(");

   }

}

export const OrderProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, []);//initialise to an empty array
    return (

        <OrderDispatchContext.Provider value = {dispatch}>
            <OrderStateContext.Provider value = {state}>
                {children}
            </OrderStateContext.Provider>
        </OrderDispatchContext.Provider>
    );
}

export const useOrder = () => useContext(OrderStateContext);
export const useDispatchOrder = () => useContext(OrderDispatchContext);

