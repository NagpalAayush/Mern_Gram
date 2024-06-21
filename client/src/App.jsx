import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../../pages/Home';
import About from '../../pages/About';
import Dashboard from '../../pages/Dashboard';
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
