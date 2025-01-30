import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import Login from './LogIn.jsx'
import logo from './assets/logo.png'
import logoRed from './assets/logoRed.png'
import Splash from "./Splash.jsx"
<<<<<<< HEAD
import Home from './Home.jsx'
import Outlet from './Outlet.jsx'

=======

import Outlet from './Outlet.jsx'
import Home from './Home.jsx'
>>>>>>> ac46409fc0247d51eb0b0d9dce4ce5cfb88774e0





function App() {

  

  return(
<<<<<<< HEAD
      <div className='flex flex-col items-center h-screen'>
=======
      <div className='flex flex-col items-center h-screen overflow-x-hidden'>
>>>>>>> ac46409fc0247d51eb0b0d9dce4ce5cfb88774e0
        
        <Router>
          <Routes>
            <Route  path='/' element={<Splash logo={logo} />}/>
            <Route path='/login' element={<Login logo={logoRed} />} />
            <Route path='/home' element={<Home />} />
<<<<<<< HEAD
            <Route path='/outlet-creation' element={<Outlet />} /> 
=======
            <Route element={<Outlet />} path='/outlet-creation' />
>>>>>>> ac46409fc0247d51eb0b0d9dce4ce5cfb88774e0
          </Routes>
        </Router> 
            
      </div>


 )



}
export default App
