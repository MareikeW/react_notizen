// 05 useRef and useEffect - DOM interaction
/*
Often when working with React you’ll need to integrate with UI libraries. 
Some of these need to work directly with the DOM. Remember that when you do: 
<div>hi</div> that’s actually syntactic sugar for a React.createElement so you 
don’t actually have access to DOM nodes in your render method. In fact, DOM nodes 
aren’t created at all until the ReactDOM.render method is called. Your component’s 
render method is really just responsible for creating and returning React Elements 
and has nothing to do with the DOM in particular.

So to get access to the DOM, you need to ask React to give you access to a 
particular DOM node when it renders your component. The way this happens is 
through a special prop called ref.

Here’s a simple example of using the ref prop:
function MyDiv() {
  const myDivRef = React.useRef()
  React.useEffect(() => {
    const myDiv = myDivRef.current
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div>
}

After the component has been rendered, it’s considered “mounted.” That’s when the 
React.useEffect callback is called and so by that point, the ref should have its 
current property set to the DOM node. So often you’ll do direct DOM 
interactions/manipulations in the useEffect callback.

Exercise:
In this exercise we’re going to make a <Tilt /> component that renders a div and 
uses the vanilla-tilt library to make it super fancy.

The thing is, vanilla-tilt works directly with DOM nodes to setup event handlers 
and stuff, so we need access to the DOM node. But because we’re not the one calling 
document.createElement (React does) we need React to give it to us.

So in this exercise we’re going to use a ref so React can give us the DOM node and 
then we can pass that on to vanilla-tilt.

Additionally, we’ll need to clean up after ourselves if this component is unmounted. 
Otherwise we’ll have event handlers dangling around on DOM nodes that are no longer 
in the document.
*/

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  const tiltRef = React.useRef();
  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  React.useEffect(() => {
    const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, {
     max: 25,
     speed: 400,
     glare: true,
     'max-glare': 0.5,
   })
    return () => tiltNode.vanillaTilt.destroy()
  }, []);
  
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`.

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App05useRefuseEffect() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App05useRefuseEffect;