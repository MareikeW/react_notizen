import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CompoundComponents01 from "./CompoundComponents01";
import FlexibleCompoundComponents01 from "./FlexibleCompoundComponents";

// Unser Menü für sämtliche React Advanced Patterns Aufgaben
function AdvancedPatternsER() {
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
                <Link to="/01-compound-components">01 Compound Components</Link>
              </li>
              <li>
                <Link to="/01-flexible-compound-components">01 Flexible Compound Components</Link>
              </li>
              
            </ul>
          </nav>
        <Switch>
          <Route path="/01-compound-components">
            <CompoundComponents01 />
          </Route>

          <Route path="/01-flexible-compound-components">
              <FlexibleCompoundComponents01 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AdvancedPatternsER;