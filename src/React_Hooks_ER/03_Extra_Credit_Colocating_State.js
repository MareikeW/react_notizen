// 03 Extra Credit - Colocating State
/*
As a community we’re pretty good at lifting state. It becomes natural over time. 
One thing that we typically have trouble remembering to do is to push state back down (or colocate state).

👨‍💼 Peter told us that now users only want the animal displayed instead of the name
*/

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
  
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => onAnimalChange(event.target.value)}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({animal}) {
  return <div>{`Hey, your favorite animal is: ${animal}!`}</div>
}

function App03ExtraColocatingState() {
  // 🐨 add a useState for the animal
  const [animal, setAnimal] = React.useState('')
  
  return (
    <form>
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal}/>
      {/* 🐨 pass the animal prop here */}
      <Display animal={animal} />
    </form>
  )
}

export default App03ExtraColocatingState;