import React from 'react'
import Navbar from '../components/Navbar'
import WebLayout from '../layouts/WebLayout'
import { SOCIALS } from '../utils/common.js'
const Contact = () => {
  return (
    <WebLayout>
      <div>
        Contact us page,
        <a href={SOCIALS.facebook.url}>
          {SOCIALS.facebook.name}
        </a>
        <a href={SOCIALS.linkedin.url}>
          {SOCIALS.linkedin.name}
        </a>
      </div>
    </WebLayout>
  )
}

export default Contact
