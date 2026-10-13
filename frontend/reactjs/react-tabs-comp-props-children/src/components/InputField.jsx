import React from 'react'

const InputField = ({type = "text", placeholder}) => {
  return (
    <input type={type}
        className='bg-gray-200 py-2 px-3 rounded focus:outline-blue-400'
        placeholder={placeholder} />
  )
}

export default InputField
