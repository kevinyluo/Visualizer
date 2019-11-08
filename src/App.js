import React from 'react';
import logo from './logo.svg';
import Visualizer from './Visualizer/Visualizer';
import './App.css';
//import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Visualizer></Visualizer>
    </div>
  );
}

export default App;
