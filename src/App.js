import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Service from './pages/Service'
import AboutUs from './pages/AboutUs'

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='contactus' element={<Contactus></Contactus>}></Route>
   <Route path='/service' element={<Service/>}></Route>
   <Route path='/about-us' element={<AboutUs/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
