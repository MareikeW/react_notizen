// 03 Lifting State
/*
Peter told us we’ve got a new feature request for the Display component. 
He wants us to display the animal the user selects. But that state is managed in a “sibling” component, 
so we have to move that management to the least common parent (App) and then pass it down.
*/

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
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

function Display({name, animal}) {
   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}


function App03() {
  // 🐨 add a useState for the animal
  const [animal, setAnimal] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal}/>
      {/* 🐨 pass the animal prop here */}
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default App03;