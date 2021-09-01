// Flexible Compound Components

/* Right now our component can only clone and pass props to immediate children. 
So we need some way for our compound components to implicitly accept the on state and toggle method 
regardless of where they're rendered within the Toggle component's children of children and so on.

The way we do this is through context. React.createContext is the API we want.

The fundamental difference between this exercise and the last one is that now we're going to allow people 
to render the compound components wherever they like in the render tree. Searching through props.children 
for the components to clone would be futile. So we'll use context instead.

Your job will be to make the ToggleContext which will be used to implicitly share the state between these components, 
and then a custom hook to consume that context for the compound components to do their job.
*/

import * as React from 'react'
import {Switch} from './switch'

// Creates ToggleContext context here
const ToggleContext = React.createContext();
ToggleContext.displayName = "ToggleContext";

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  /* Anstelle von:
  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
*/
    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}
// We still get the children from props (as it's passed to us by the
// developers using our component), but we get `on` implicitly from
// ToggleContext now
// Creates a helper method to retrieve the context here:
function useToggle() {
    return React.useContext(ToggleContext);
}

/* Anstelle von:
function ToggleOn({on, children}) {
  return on ? children : null
}
*/
function ToggleOn({children}) {
    const { on } = useToggle();
    return on ? children : null;
}

/* Anstelle von:
function ToggleOff({on, children}) {
  return on ? null : children
}
*/
function ToggleOff({children}) {
    const { on } = useToggle();
    return on ? null : children;
  }


// Gets `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton({...props}) {
    const { on, toggle } = useToggle();
    return <Switch on={on} onClick={toggle} {...props} />
}

function FlexibleCompoundComponents01() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default FlexibleCompoundComponents01;