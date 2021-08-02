import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Greeting from "./01";
import Greeting02 from "./02";
import Greeting02Extra from "./02_Extra";

function ReactHooksER() {
  return (
    <div className="App">
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/01-greeting">01 Greeting</Link>
              </li>

              <li>
                <Link to="/02-greeting">02 Greeting</Link>
              </li>

              <li>
                <Link to="/02-greeting-extra">02 Greeting Extra</Link>
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
          <Route path="/02-greeting-extra">
              <Greeting02Extra />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default ReactHooksER;