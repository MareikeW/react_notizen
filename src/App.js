import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ReactHooksER from "./React_Hooks_ER/React_Hooks_ER_Router"

function App() {
  return (
    <div>
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/react-hooks-er">React Hooks Epic React</Link>
              </li>
              
            </ul>
          </nav>
        <Switch>
          <Route path="/react-hooks-er">
            <ReactHooksER />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
