import * as React from 'react';
/* Ändere useState zu useReducer */

// 1. Argument: aktueller Wert von count
// 2. Argument: Wert, der an setCount weitergeben wird
const countReducer = (state, newState) => newState;

function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = React.useState(initialCount); --> useState
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function UseReducer01() {
  return <Counter />
}

export default UseReducer01;