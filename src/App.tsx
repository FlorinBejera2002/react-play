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
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Play-Calculator</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
          <input
            onChange={(e) => {
              setNumberOne(+e.target.value);
            }}
            type="text"
            value={numberOne}
          />
          <button onClick={calculateSum}>+</button>
          <button onClick={decreaseSum}>-</button>
        </div>

        <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => {
              setNumberTwo(+e.target.value);
            }}
          />
          <button onClick={dividedSum}>/</button>
          <button onClick={multiplySum}>x</button>
        </div>
      </div>

      <h2>result : {result}</h2>
    </div>
  );
};
