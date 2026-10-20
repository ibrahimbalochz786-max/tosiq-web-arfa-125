import React from 'react'

const SimpleButton = ({ title }) => {
  return (
    <button className='hover:shadow-lg cursor-pointer bg-purple-700 text-white p-3 m-1 rounded'>
      { title }
    </button>
  )
}
export default SimpleButton
