import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
