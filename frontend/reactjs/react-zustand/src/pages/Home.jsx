import React from 'react'
import Navbar from '../components/Navbar'
import { useData } from '../store/useData'

const Home = () => {
  const username = useData(state => state.username)
  const password = useData(state => state.password)
  return (
    <div>
        <Navbar />
      Home, 
      <div>
        Username: {username} <br />
        Password: {password}
      </div>
    </div>
  )
}

export default Home
