import React from 'react'
import Navbar from '../components/Navbar'
import { useData } from '../store/useData'

const About = () => {
  const username = useData(state => state.username)
  return (
    <div>
        <Navbar />
      About, {username}
    </div>
  )
}

export default About
