import React from 'react'
import Navbar from '../components/Navbar'
import { useData } from '../store/useData'

const Contact = () => {
  const greetings = useData(state => state.greetings)
  return (
    <div>
        <Navbar />
      Contact, <button onClick={greetings}>See console</button>
    </div>
  )
}

export default Contact
