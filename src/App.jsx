import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import Login from './LogIn.jsx'
import logo from './assets/logo.png'
import logoRed from './assets/logoRed.png'
import Splash from "./Splash.jsx"
import Home from './Home.jsx'
import Outlet from './Outlet.jsx'






function App() {

  

  return(
      <div className='flex flex-col items-center h-screen'>
        
        <Router>
          <Routes>
            <Route  path='/' element={<Splash logo={logo} />}/>
            <Route path='/login' element={<Login logo={logoRed} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/outlet-creation' element={<Outlet />} /> 
          </Routes>
        </Router> 
            
      </div>


 )



}
export default App
