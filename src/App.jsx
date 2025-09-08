import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mybody from './components/Mybody'
import Skills from './components/Skills'
import Cards from './components/Mypictures'
import Project1 from './components/Projects1.jsx'
import Project2 from './components/Projects2.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='bg-[rgb(17,7,31)]'>
        <Hero />
        <Mybody />
        <Cards/>
        <Skills />
        <Project1/>
        <Project2/>
        {/* <Skills /> */}

      </div>
    </>
  )
}

export default App
