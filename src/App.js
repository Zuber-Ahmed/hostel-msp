import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './Components/Common.css'
import { Home } from './Components/Home';
import { Admin } from './Components/Admin';
import { FrontDesk } from './Components/FrontDesk';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { NavBar } from './Components/NavBar';
import { ManageRoom } from './Components/ManageRoom';
import { RoomList } from './Components/RoomList';
import { RemoveRoom } from './Components/RemoveRoom';
import { Shopping } from './Components/Shopping';
import { Chat } from './Chats/Chat';
import { MyChats } from './Chats/MyChats';
import { UserList } from './JSON/UserList';
import {Counter} from './Practices/Counter'


function App() {
  return (
    <div className="main">
      <Counter/>
      {/* <Counter/>   */}
      {/* <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/FrontDesk/RemoveRoom' element={<RemoveRoom/>}/>
        <Route path='/FrontDesk/RoomList' element={<RoomList/>}/>
        <Route path='/FrontDesk/ManageRoom' element={<ManageRoom/>}/>
        <Route path='/FrontDesk' element={<FrontDesk/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/eshop' element={<Shopping/>}/>
        <Route path='/Chats' element={<Chat/>}/>
        <Route path='/MyChats' element={<MyChats/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
