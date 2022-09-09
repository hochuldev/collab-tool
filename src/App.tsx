import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ProjectHeader from './components/ProjectHeader/ProjectHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProjectHeader></ProjectHeader>
      </div>
    </BrowserRouter>
  );
}

export default App;
