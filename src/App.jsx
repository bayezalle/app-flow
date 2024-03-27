import { useState } from 'react'

import './App.css'
// import { Navbar } from 'flowbite-react'
import Navbar from './Compenets/Navigate/Navbar'
import Header from './Compenets/Navigate/Header'
import Home from './Compenets/Home/Home'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Navbar />
    <Header />
    <Home />
    </>
  )
}

export default App
