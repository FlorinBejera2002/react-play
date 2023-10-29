import React from "react";
import "./App.css";
import Calculator from "./components/calculator"; 
import About from "./components/about"; 
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} /> 
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};
