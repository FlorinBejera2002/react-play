import "./App.css";
import { useState } from "react";

export const App = () => {
  const [result, setResult] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const calculateSum = () => {
    const sum = numberOne + numberTwo;
    setResult(sum);
  };

  const decreaseSum = () => {
    const sum = numberOne - numberTwo;
    setResult(sum);
  };

  const dividedSum = () => {
    const sum = numberOne / numberTwo;
    setResult(sum);
  };

  const multiplySum = () => {
    const sum = numberOne * numberTwo;
    setResult(sum);
  };

  return (
    <div>
      <h1>Play-Calculator</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ gap: "10px", display: "flex" }}>
          <input
            onChange={(e) => {
              setNumberOne(+e.target.value);
            }}
            type="text"
            value={numberOne}
          />

          <button onClick={dividedSum}>/</button>
          <button onClick={multiplySum}>x</button>
        </div>

        <div>
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => {
              setNumberTwo(+e.target.value);
            }}
          />
          <button onClick={calculateSum}>+</button>
          <button onClick={decreaseSum}>-</button>
        </div>

        <label>result : {result}</label>
      </div>
    </div>
  );
};
