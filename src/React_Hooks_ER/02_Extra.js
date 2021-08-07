// Extra Credit - Custom Hook
import * as React from 'react'

// Custom Hook, die in verschiedenen Komponenten wiederverwendet werden kann.
function useLocalStorageStage(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState];
}
function Greeting02Extra({initialName = ''}) {
  // 🐨 initializes the state to the value from localStorage
  const [name, setName] = useLocalStorageStage("name", initialName);

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

export default Greeting02Extra;