import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Second from "./Second";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Second" element={<Second />}></Route>
        <Route path="/Three" element={<Three />}></Route>
        <Route path="/Four" element={<Four />}></Route>
        <Route path="/Five" element={<Five />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
