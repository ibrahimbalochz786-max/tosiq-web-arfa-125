import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Users from './pages/Users'
import AddUser from './pages/AddUser'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
