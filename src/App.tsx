import React from "react";
import "./App.css";
import calculator from "./components/calculator";
import about from "./components/about/about";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
