import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import HomeSidebar from './pages/ProjectHome/HomeSidebar/HomeSidebar';
import WorkReport from './components/WorkReport/WorkReport';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <ProjectHeader />
        <HomeSidebar />
      </div>
      <WorkReport /> */}
      <LoginPage />
    </BrowserRouter>
  );
}

export default App;
