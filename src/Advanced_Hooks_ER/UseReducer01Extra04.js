import * as React from 'react';

/* So schreiben die meisten eine useReducer-Funktion, in Anlehnung an Redux. */

// traditional dispatch object with a type and switch statement

function countReducer(state, action) {

  const {type, step} = action
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state; // count wird aus state destrukturiert / Objektdestrukturierung, weil "count" ein Objekt ist.
  const increment = () => dispatch({type: 'increment', step}); // dispatch wie setState
  const decrement = () => dispatch({type: 'decrement', step});  
  // Mit Klick auf Button wird ein Objekt mit type- und step-Variable an die countReducer-Funktion weitergegeben
  // state wird oben über React.useReducer(counterReducer, ...) an die countReducer-Funktion weitergegeben

  return (
    <>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </>
  )
}

function UseReducer01Extra04() {
  return <Counter />
}

export default UseReducer01Extra04;