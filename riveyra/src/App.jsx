import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Number from './components/Number'
import About from './components/About'
import Services from './components/Services'
import Choose from './components/Choose'
import Tech from './components/Tech'
import Trust from './components/Trust'
import Footer from './components/Footer'
import Team from './components/Team'

import Client from './components/Client'
import Carousel from './components/Carousel'
import Dev from './components/Dev'
import About1 from './utils/About1'
import Services1 from "./utils/Services1"



function App() {


  return (
    <>
      <Nav />
      <Hero />
      <Number />
      <About />
      <Services />
      <Dev />
      <Choose />
      <Tech />

      <Trust />
      <Team />
      <Carousel />
      <Client />

      <Footer />
      

      



    </>
  )
}

export default App
