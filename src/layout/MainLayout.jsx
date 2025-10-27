import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

const MainLayout = () => {
  return (
    <div className='w-full bg-white'> 
        <Navbar/> 
       <main> 
        <Outlet/>
       </main>
        <Footer/>
    </div>
  )
}

export default MainLayout