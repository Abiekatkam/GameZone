import "./App.css";

import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import RockPaperScissor from "./pages/RockPaperScissor";
import RSPIntro from "./components/RSPIntro";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/start/rock-paper-scissor" element={<RSPIntro />} />
      <Route path="/rock-paper-scissor/*" element={<RockPaperScissor />} />
    </Routes>
  );
};

export default App;
