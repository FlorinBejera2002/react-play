import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  </Router>
);
