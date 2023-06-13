import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OwnerId from "./OwnerId";
import CardName from "./CardName";
import CardType from "./CardType";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ownerId/:ownerId" element={<OwnerId />} />
          <Route path="/cardName/:cardName" element={<CardName />} />
          <Route path="/cardType/:cardType" element={<CardType />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
