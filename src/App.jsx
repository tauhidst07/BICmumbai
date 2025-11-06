import React, { useContext, useEffect, useState } from 'react'
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
import AppWithSplash from './components/loader/AppWithSplash'
import { useSSR } from 'react-i18next'
import SplashScreen from './components/loader/SplashScreen'
import AppContext from './context/AppContext'
import i18n from './i18n'
import ActivityDetails from './pages/ActivityDetails'
import DonatePage from './pages/DonatePage'
import ActivitiesPage from './pages/ActivitiesPage'
import client from './utility/contentfulClient'

const App = () => {

  const {showSplash,setShowSplash} = useContext(AppContext);  
  


  useEffect(()=>{ 
    let timer;
    if(showSplash){
      timer = setTimeout(()=>{
          setShowSplash(false);
      })
    } 
    return ()=>{
      clearTimeout(timer);
    }
  },[showSplash])

  if(showSplash){
    return <SplashScreen/>
  }

  return (
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} /> 
          <Route path='test' element = {<ActivityDetails/>}/> 
          <Route path='donate' element={<DonatePage/>} /> 
          <Route path='activities' element={<ActivitiesPage/>}/>
        </Route>
      </Routes>
  )
}

export default App