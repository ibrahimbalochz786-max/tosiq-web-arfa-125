import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Page404 from './pages/Page404'
import UserDetails from './pages/UserDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />

        <Route path='/*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
