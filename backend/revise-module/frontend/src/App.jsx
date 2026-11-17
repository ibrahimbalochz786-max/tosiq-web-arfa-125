import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Users from './pages/Users'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
