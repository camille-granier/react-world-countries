import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js"
import About from "./pages/About.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-world-countries" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/notfound" element={ <NotFound/> } />
      </Routes>
      </div>
  );
}

export default App;
