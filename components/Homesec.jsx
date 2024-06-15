import React from 'react'
import Header from './Home/Header'
import Intro from './Home/Intro'
import Skills from './Home/Skills'
import Projects from './Home/Projects'

function Homesec() {
  return (
    <div className='bg-black'>
        <Header/>
        <Intro/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Homesec
