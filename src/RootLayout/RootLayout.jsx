import React from 'react'
import Navbar from './../section/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../section/Footer';


const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default RootLayout