import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <RouteList />
      </div>
    </BrowserRouter>
  );
}

export default App;
