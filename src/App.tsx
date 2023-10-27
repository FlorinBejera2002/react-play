import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const App = () => {
  const [result, setResult] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const calculateSum = () => setResult(numberOne + numberTwo);
  const calculateDecrease = () => setResult(numberOne - numberTwo);
  const calculateDivided = () => setResult(numberOne / numberTwo);
  const calculateMultiply = () => setResult(numberOne * numberTwo);

  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/">Home </Link>
        </div>
        <div>
          <Link to="/calculator"> Calculator </Link>
        </div>
        <div><Link to="/aboutus"> About us </Link></div>
      </div>
      {/* <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Play-Calculator</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <input
                onChange={(e) => {
                  setNumberOne(+e.target.value);
                }}
                type="text"
                value={numberOne}
              />
              <button onClick={calculateSum}>+</button>
              <button onClick={calculateDecrease}>-</button>
            </div>

            <div
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                value={numberTwo}
                onChange={(e) => {
                  setNumberTwo(+e.target.value);
                }}
              />
              <button onClick={calculateDivided}>/</button>
              <button onClick={calculateMultiply}>x</button>
            </div>
          </div>

          <h2>result : {result}</h2>
        </div> */}
      {/* </div> */}
    </div>
  );
};
