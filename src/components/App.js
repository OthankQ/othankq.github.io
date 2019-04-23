import React from 'react';
import Sidebar from './Sidebar';
import Introduction from './Introduction';
import About from './About';
import Experience from './Experience';
import './App.css';

const App = () => {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;
