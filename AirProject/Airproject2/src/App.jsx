import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import Login from './LogIn.jsx'
import logo from './assets/logo.png'
import logoRed from './assets/logoRed.png'
import Splash from "./Splash.jsx"
import Outlet from './Outlet.jsx'
import Home from './Home.jsx'
// import Form1 from './pages/Form1.jsx'
// import Form3 from './pages/Form3.jsx'
// import Form2 from './pages/Form2.jsx'
import Summary from './Summary.jsx'
import ProviderContext from './ProviderContext.jsx'






function App() {

  

  return(

    <ProviderContext>
      <div className='flex flex-col items-center w-screen overflow-x-hidden'>

        <div className='flex flex-col items-center'>
          <Router>
            <Routes>
              <Route path='/' element={<Splash logo={logo} />} />
              <Route path='/login' element={<Login logo={logoRed} />} />
              <Route path='/home' element={<Home />} />

              <Route element={<Outlet />} path='/outlet-creation' />
              <Route element={<Summary />} path='/summary' />


              {/* <Route path='/form1' element={<Form1 />} />
              <Route path='/form2' element={<Form2 />} />
              <Route path='/form3' element={<Form3 />} /> */}
            </Routes>
          </Router>
        </div>
      </div>

    </ProviderContext>

 )



}
export default App
