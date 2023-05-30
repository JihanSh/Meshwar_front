import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/headnav/navbar'
import Footer from '../components/footer/footer'

const MeshwarLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default MeshwarLayout