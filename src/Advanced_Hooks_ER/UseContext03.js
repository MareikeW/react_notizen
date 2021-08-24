// useContext: simple Counter

/* Your job is to fill in the CountProvider function component so that the app works and the tests pass. */

import * as React from 'react'

/* creates context */
const CountContext = React.createContext();

// CountProvider component:
function CountProvider(props) {
  // gets the count state and setCount updater with React.useState
  const [count, setCount] = React.useState(0);
  // creates a `value` array with count and setCount
  const value = [count, setCount];
  // returns your context provider with the value assigned to that array and forward all the other props
  // more specifically, the children prop is forwarded to the context provider
  return <CountContext.Provider value={value} {...props} /> 
}

function CountDisplay() {
  // gets the count from useContext with the CountContext
  const [count] = React.useContext(CountContext);

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // gets the setCount from useContext with the CountContext
  const [, setCount] = React.useContext(CountContext);

  const increment = () => setCount(c => c + 1);

  return <button onClick={increment}>Increment count</button>
}

function UseContext01() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}
export default UseContext01;
