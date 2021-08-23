import * as React from 'react';
/* Remember this.setState from class components? If not, lucky you 😉. 
Either way, let's see if you can figure out how to make the state updater (dispatch function) behave in a similar way 
by changing our state to an object ({count: 0}) and then calling the state updater with an object which merges with the 
current state. */

// Aufgabe: simulate setState with an object

const countReducer = (state, action) => ({...state, ...action});

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const {count} = state;
  const increment = () => setState({count: count + step});

  return <button onClick={increment}>{count}</button>
}

function UseReducer01Extra02() {
  return <Counter />
}

export default UseReducer01Extra02;