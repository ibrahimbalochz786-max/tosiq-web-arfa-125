import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
