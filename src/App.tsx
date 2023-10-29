import React from "react";
import "./App.css";
import Calculator from "./components/calculator"; 
import About from "./components/about/about"; 
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Defineți componenta Home */}
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
