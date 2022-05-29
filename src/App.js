import React,{useState} from 'react'
import {BrowserRouter,Route,Router,Routes,Link} from 'react-router-dom'
import './Components/Common.css'
import { Home } from './Components/Home';
import { Admin } from './Components/Admin';
import { FrontDesk } from './Components/FrontDesk';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';


function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/FrontDesk' element={<FrontDesk/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
