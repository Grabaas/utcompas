import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NabVarComponet';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Feed from './Pages/Feed';
import NotFoundPages from './Pages/NotFoundPages';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Feed" element={<Feed/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFoundPages/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
