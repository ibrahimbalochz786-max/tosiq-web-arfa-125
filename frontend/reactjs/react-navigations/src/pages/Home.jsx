import React from 'react'
import Navbar from '../components/Navbar'
import WebLayout from '../layouts/WebLayout'
import { APP_NAME } from '../utils/common.js'

const Home = () => {
  return (
    <WebLayout>
      <div>
        Home page, {APP_NAME}
      </div>
    </WebLayout>
  )
}

export default Home
