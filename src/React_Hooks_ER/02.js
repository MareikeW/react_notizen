/* Exercise 02: useEffect: persistent state */

/* In this exercise, we’re going to enhance our <Greeting /> component 
to get its initial state value from localStorage (if available) and keep 
localStorage updated as the name is updated. */

import React, {useState, useEffect} from 'react'

function Greeting02({initialName = ''}) {
  const [name, setName] = useState(() => window.localStorage.getItem('name') || initialName)
  
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default Greeting02;