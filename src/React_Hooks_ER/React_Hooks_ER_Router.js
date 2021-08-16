import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Greeting from "./01";
import Greeting02 from "./02";
import Greeting02ExtraCustomHook from "./02_Extra_Custom_Hook";
import Greeting02ExtraLazyStateInitialization from "./02_Extra_Lazy_State_Initialization";
import RefBeispiel from "./refBeispiel";
import ReducerBeispiel from "./reducerBeispiel";

// Unser Menü für sämtliche React Hooks Aufgaben
function ReactHooksER() {
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
                <Link to="/01-greeting">01 Greeting</Link>
              </li>

              <li>
                <Link to="/02-greeting">02 Greeting</Link>
              </li>

              <li>
                <Link to="/02-greeting-extra-lazy-state-initialization">02 Greeting Extra Lazy State Initialization</Link>
              </li>

              <li>
                <Link to="/02-greeting-extra">02 Greeting Extra Custom Hook</Link>
              </li>

              <li>
                <Link to="/useref-beispiel">useRef-Beispiel</Link>
              </li>

              <li>
                <Link to="/usereducer-beispiel">useReducer-Beispiel</Link>
              </li>
              
            </ul>
          </nav>
        <Switch>
          <Route path="/01-greeting">
            <Greeting initialName="Mareike"/>
          </Route>

          <Route path="/02-greeting">
              <Greeting02 />
          </Route>

          <Route path="/02-greeting-extra-lazy-state-initialization">
              <Greeting02ExtraLazyStateInitialization />
          </Route>

          <Route path="/02-greeting-extra-custom-hook">
              <Greeting02ExtraCustomHook />
          </Route>

          <Route path="/useRef-beispiel">
              <RefBeispiel />
          </Route>

          <Route path="/usereducer-beispiel">
              <ReducerBeispiel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default ReactHooksER;