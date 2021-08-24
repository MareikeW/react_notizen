// Extra Credit 1 - Consumer Hook

/* If you don't provide a default context value, that would render <div>Foo is: </div>. 
This is because the context value would be undefined. In real-world scenarios, having an 
unexpected undefined value can result in errors that can be difficult to debug.

In this extra credit, you need to create a custom hook that I can use like this:
const [count, setCount] = useCount();

And if you change the App to this:
function App() {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  )
}
It should throw an error indicating that useCount must be used within a CountProvider. */
import * as React from 'react'

// creates CountContext with React.createContext
const CountContext = React.createContext();

function CountProvider(props) {
  // gets the count state and setCount updater with React.useState
  const [count, setCount] = React.useState(0);
  // creates a `value` array with count and setCount
  const value = [count, setCount];
  // returns context provider with the value assigned to that array and forward all the other props
  // more specifically, the children prop is forwarded to the context provider
  return <CountContext.Provider value={value} {...props} /> 
}

// custom hook that displays an error when context is undefined
function useCount() {
  const context = React.useContext(CountContext);

  if (!context) {
    throw new Error(`useCount must be used within the CountProvider`)
  }

  return context;
}

function CountDisplay() {
  // gets the count from useContext with the CountContext
  const [count] = useCount();

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // gets the setCount from useContext with the CountContext
  // wirft einen Error, weil Counter-Komponente außerhalb des Providers ist.
  const [, setCount] = useCount();

  const increment = () => setCount(c => c + 1);

  return <button onClick={increment}>Increment count</button>
}

function UseContext03Extra1() {
  // Counter component ist außerhalb des CountProvider und kann demnach nicht auf Context zugreifen bzw. 
  // kann nicht Context konsumieren.
  return (
    <div>
      <CountProvider>
        <CountDisplay />
      </CountProvider>
      <Counter />
    </div>
  )
}

export default UseContext03Extra1;