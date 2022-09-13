import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import HomeSidebar from './pages/ProjectHome/HomeSidebar/HomeSidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProjectHeader />
        <HomeSidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
