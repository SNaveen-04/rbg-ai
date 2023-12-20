import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default Layout