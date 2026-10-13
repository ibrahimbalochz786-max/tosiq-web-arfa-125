import React from 'react'

const SimpleButton = ({title}) => {
  return (
    <button className='p-2 bg-sky-300 rounded cursor-pointer hover:bg-sky-400 active:bg-sky-500'>
        {title}
    </button>
  )
}

export default SimpleButton
