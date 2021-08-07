/* useReducer-Beispiel aus Scrimba FCP
Ein Zähler, der Plus und Minus rechnet. */

import React, { useReducer } from 'react';

const ReducerBeispiel = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'INCREMENT': {
        return { ...state, count: state.count + 1 }
      }
      case 'DECREMENT': {
        return { ...state, count: state.count - 1 }
      }
      default: {
        return state
      }
    }
  }, {
    count: 0
  })
  
  let { count } = state
  
  const add = () => {
    // setCount(count + 1)
    dispatch({ type: 'INCREMENT' })
  }
  
  const subtract = () => {
    if (count > 0) {
      // setCount(count - 1)
      dispatch({ type: 'DECREMENT' })
    }
  }
  
  return (
    <section className="component">
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div style={{marginTop: "20px"}}>
        <button onClick={subtract} style={{padding: "0.5em 2em"}}>-</button>
        <div style={{margin: "20px"}}>{count}</div>
        <button onClick={add} style={{padding: "0.5em 2em"}}>+</button>
      </div>
    </section>
  )
}

export default ReducerBeispiel;