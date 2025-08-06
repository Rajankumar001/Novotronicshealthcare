import React from 'react'
import Navbar1 from './navbar/navbar1'
import Navbar2 from './navbar/navbar2'
import Footer from './footer/footer'

const Layout = ({children}) => {
  return (
    <>
    {/* <Navbar1/> */}
    <Navbar2/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout