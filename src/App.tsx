import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const App = () => (

  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to=''>Calculator</Link>
          </li>
          
          <li>
            <Link to="">About us.</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);
