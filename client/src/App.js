import React from 'react';
import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Register } from './components/Register';
import {Routes, Route} from 'react-router-dom';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
          
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  
    </div>

  );
}

export default App;
