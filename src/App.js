import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ReactHooksER from "./React_Hooks_ER/React_Hooks_ER_Router";
import AdvancedHooksER from './Advanced_Hooks_ER/Advanced_Hooks_ER_Router';
import AdvancedPatternsER from "./Advanced_Patterns_ER/Advanced_Patterns_ER_Router";

function App() {
  return (
    <div>
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/react-hooks-er">React Hooks Epic React</Link>
              </li>
              <li>
                <Link to="/advanced-hooks-er">Advanced Hooks Epic React</Link>
              </li>
              <li>
                <Link to="/advanced-patterns-er">Advanced Patterns Epic React</Link>
              </li>
              
            </ul>
          </nav>
        <Switch>
          <Route path="/react-hooks-er">
            <ReactHooksER />
          </Route>

          <Route path="/advanced-hooks-er">
            <AdvancedHooksER />
          </Route>

          <Route path="/advanced-patterns-er">
            <AdvancedPatternsER />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
