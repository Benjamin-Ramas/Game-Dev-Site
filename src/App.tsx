import { useState } from 'react'
import Header from './Header'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Games from './Games'
import ContactMe from './ContactMe'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header />
      <div className='contentHolder'>
        <Intro/>
        <AboutMe />
        <Games />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
