import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Employees from '../pages/Employees'
import About from '../pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App