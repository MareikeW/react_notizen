/* Exercise 01 mit Extra: useState: greeting */

/* In this exercise we have a form where you can type in your name and 
it will give you a greeting as you type. Fill out the Greeting component 
so that it manages the state of the name and shows the greeting as the 
name is changed. 

Extra: Make the Greeting accept a prop called initialName and initialize 
the name state to that value.*/


import * as React from 'react'
import {useState} from "react";

function Greeting({initialName}) {
  const [name, setName] = useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="component">
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default Greeting;