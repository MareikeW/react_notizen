import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UseReducer01 from "./UseReducer01";
import UseReducer01Extra02 from "./UseReducer01Extra2";
import UseReducer01Extra04 from "./UseReducer01Extra04";
import UseCallbackExample from "./UseCallbackExample";

// Unser Menü für sämtliche React Hooks Aufgaben
function AdvancedHooksER() {
  const navStyles = {
    width: 80 + "%",
    margin: "50px auto"
  }

  return (
    <div className="App">
      <Router>
        <nav>
            <ul style={navStyles}>
              <li>
                <Link to="/01-useReducer">01 useReducer</Link>
              </li>
              <li>
                <Link to="/01-useReducer-extra2">01 useReducer Extra 2</Link>
              </li> 
              <li>
                <Link to="/01-useReducer-extra4">01 useReducer Extra 4</Link>
              </li>
              <li>
                <Link to="/02-useCallback-example">02 useCallback-Beispiel</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/01-useReducer">
            <UseReducer01 />
          </Route>

          <Route path="/01-useReducer-extra2">
            <UseReducer01Extra02 />
          </Route>

          <Route path="/01-useReducer-extra4">
            <UseReducer01Extra04 />
          </Route>

          <Route path="/02-useCallback-example">
            <UseCallbackExample />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AdvancedHooksER;