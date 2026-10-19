import React from 'react'
import { Link } from 'react-router'

const Page404 = () => {
  return (
    <div>
      Data not found go back to main page
      <br />
      <Link to={'/'} className='text-blue-500 text-sm'>Home</Link>
    </div>
  )
}

export default Page404
