import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';


const App: React.FC  = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
