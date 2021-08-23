import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UseReducer01 from "./useReducer01";

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

              
              
            </ul>
          </nav>
        <Switch>
          <Route path="/01-useReducer">
            <UseReducer01 />
          </Route>

          
        </Switch>
      </Router>
    </div>
  );
}

export default AdvancedHooksER;