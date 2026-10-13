import React from 'react'

const Card = ({children}) => {
  return (
    <div className='my-3 bg-gray-200 w-76 p-4 rounded-lg shadow shadow-gray-400'>
      {children}
    </div>
  )
}

export default Card
