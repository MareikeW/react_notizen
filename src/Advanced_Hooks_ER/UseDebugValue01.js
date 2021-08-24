// useDebugValue: useMedia

/* In this exercise, we have a custom useMedia hook which uses window.matchMedia to 
determine whether the user-agent satisfies a given media query. In our Box component, 
we're using it three times to determine whether the screen is big, medium, or small and 
we change the color of the box based on that.

If you don't have the browser extension installed, install it now and open the React tab in the DevTools. 
Select the <Box /> component in the React tree. Your job is to use useDebugValue to provide a nice label.*/

/* unter "Box" in DevTools --> Components bei Vollbildmodus
hooks
Media: "`(min-width: 1000px)` => true"
    1State: true
    2Effect: ƒ () {}
Media: "`(max-width: 999px) and (min-width: 700px)` => false"
    3State: false
    4Effect: ƒ () {}
Media: "`(max-width: 699px)` => false"
    5State: false
    6Effect: ƒ () {}
*/
import * as React from 'react'

function useMedia(query, initialState = false) {
  const [state, setState] = React.useState(initialState)
  // calls React.useDebugValue for giving a label z. B. "`(min-width: 1000px)` => true"
  React.useDebugValue(`\`${query}\` => ${state}`);

  React.useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    function onChange() {
      if (!mounted) {
        return
      }
      setState(Boolean(mql.matches))
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}

function Box() {
  const isBig = useMedia('(min-width: 1000px)')
  const isMedium = useMedia('(max-width: 999px) and (min-width: 700px)')
  const isSmall = useMedia('(max-width: 699px)')
  const color = isBig ? 'green' : isMedium ? 'yellow' : isSmall ? 'red' : null

  return <div style={{width: 200, height: 200, backgroundColor: color}} />
}

function UseDebugValue01() {
  return <Box />
}

export default UseDebugValue01;