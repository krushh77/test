import React, { createContext, useContext } from 'react'
import Counter, { myContext } from './Counter'



function Homes() {
    const {state, dispatch} = useContext(myContext)
  return (
    <>
    <div>Home</div>
    <h1>Counter : {state.Counter}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </>
  )
}

export default Homes