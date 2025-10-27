import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import useImages from './hooks/useImages'
import Hero from './components/layout/Hero'
import Quicklink from './components/layout/Quicklink'
import Welcome from './components/layout/Welcome'
import CTA from './components/layout/CTA'
import Activities from './components/layout/Activities'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

const App = () => {  


  return (
    <Routes>  
      <Route path='*' element={<NotFound/>}/>
       <Route path='/' element={<MainLayout/>}> 
         <Route index element={<Home/>} /> 
         <Route path='about' element={<About/>} /> 
         <Route path='contact' element={<Contact/>} />
       </Route>
    </Routes>
  )
}

export default App