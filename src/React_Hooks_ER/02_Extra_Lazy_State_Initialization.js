// Extra Credit - Lazy State Initialization
/*
Right now, every time our component function is run, our function reads from localStorage. 
This is problematic because it could be a performance bottleneck (reading from localStorage can be slow). 
And what’s more we only actually need to know the value from localStorage the first time this component is rendered! 
So the additional reads are wasted effort.

To avoid this problem, React’s useState hook allows you to pass a function instead of the actual value, 
and then it will only call that function to get the state value when the component is rendered the first time. 
So you can go from this: React.useState(someExpensiveComputation()) To this: React.useState(() => someExpensiveComputation())

And the someExpensiveComputation function will only be called when it’s needed!

Make the React.useState call use lazy initialization to avoid a performance bottleneck of reading 
into localStorage on every render.
*/

import React, {useState, useEffect} from 'react'

function Greeting02ExtraLazyStateInitialization({initialName = ''}) {
    const getInitialState = () => window.localStorage.getItem("name");
    const [name, setName] = useState(getInitialState || initialName);
    
    useEffect(() => {
        window.localStorage.setItem("name", name);
    }, [name]);

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

export default Greeting02ExtraLazyStateInitialization;