// Extra Credit - Custom Hook
/*
The best part of hooks is that if you find a bit of logic inside your component function that you think would be useful elsewhere, you can put that in another function and call it from the components that need it (just like regular JavaScript). These functions you create are called "custom hooks".

Create a custom hook called useLocalStorageState for reusability of all this logic.
*/
import * as React from 'react'

// Custom Hook, die in verschiedenen Komponenten wiederverwendet werden kann.
function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState];
}
function Greeting02ExtraCustomHook({initialName = ''}) {
  // 🐨 initializes the state to the value from localStorage
  const [name, setName] = useLocalStorageState("name", initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div className="component">
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default Greeting02ExtraCustomHook;