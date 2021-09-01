// Compound Components

/* In this exercise we're going to make <Toggle /> the parent of a few compound components:

<ToggleOn /> renders children when the on state is true
<ToggleOff /> renders children when the on state is false
<ToggleButton /> renders the <Switch /> with the on prop set to the on state and the onClick prop set to toggle.
We have a Toggle component that manages the state, and we want to render different parts of the UI however we want. 
We want control over the presentation of the UI.

🦉 The fundamental challenge you face with an API like this is the state shared between the components is implicit, 
meaning that the developer using your component cannot actually see or interact with the state (on) or the mechanisms 
for updating that state (toggle) that are being shared between the components.

So in this exercise, we'll solve that problem by providing the compound components with the props they need implicitly 
using React.cloneElement.
*/

import * as React from 'react'
import {Switch} from './switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  // Replaced this <Switch on={on} onClick={toggle} /> with a call to React.Children.map and maps each child in
  // props.children to a clone of that child with the props they need using
  // React.Children.map(props.children, child => {/* return child clone here */})
  return React.Children.map(children, child => React.cloneElement(child, {on, toggle}))
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => on ? children : null;

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => on ? null : children;

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle, ...props}) => <Switch on={on} onClick={toggle} {...props} />;

function CompoundComponents01() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default CompoundComponents01;