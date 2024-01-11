import React, { useReducer } from 'react'
import { createContext } from 'react'

export const myContext = createContext()
const Intialstate = {Counter : 0}

const reducer = (state , action) =>{
            switch(action.type){
                case 'INCREMENT':
                    return {...state, Counter: state.Counter+1}
                case 'DECREMENT':
                    return {...state, Counter: state.Counter-1}
                    default:
                     return state;
            }
}



function Counter({children}) {
    const [state , dispatch] = useReducer(reducer, Intialstate)
  return (
    <myContext.Provider value = {{state, dispatch}}>{children}</myContext.Provider>
    
  )
}

export default Counter;