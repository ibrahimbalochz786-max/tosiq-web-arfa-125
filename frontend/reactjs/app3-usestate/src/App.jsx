import React, { useState } from 'react'
import { BiCalendar } from 'react-icons/bi'
import ActionButton from './components/ActionButton'

const App = () => {
  // let value = "Name"
  const [value, setValue] = useState("Ali haider")
  const [toggle, setToggle] = useState(false)

  const [counter, setCounter] = useState(0)

  const changeValue = () => {
    setValue("Usman ghani")
  }

  const passwordToggle = () => {
    setToggle(!toggle)
  }

  const updateCounter = (mode) => {
    if (mode == "s") {
      setCounter(counter - 1)
    } else if (mode == "a") {
      setCounter(counter + 1)
    }
  }

  return (
    <div>

      <div className='m-1'>
        <ActionButton title="Explore more" />
      </div>
      <div className='m-1'>
        <ActionButton />
      </div>
      <div className='m-1'>
        <ActionButton />
      </div>
      <div className='m-1'>
        <ActionButton />
      </div>

      <div>
        <button onClick={() => updateCounter("s")} className='p-2 bg-blue-800 cursor-pointer text-white rounded shadow hover:bg-blue-900 hover:shadow-lg'>
          -
        </button>
        {" "+counter+" "}
        <button onClick={() => updateCounter("a")} className='p-2 bg-blue-800 cursor-pointer text-white rounded shadow hover:bg-blue-900 hover:shadow-lg'>
          +
        </button>
      </div>
    Welcome {value}
    <button className='p-2 bg-gray-800 cursor-pointer text-white rounded shadow hover:bg-gray-900 hover:shadow-lg' 
    onClick={changeValue}>
      Change value
    </button>
    <hr />
      {/* <div className='flex items-center gap-2'>
        <BiCalendar /> <span>Heading</span>
      </div> */}



      <input type={toggle? "text": "password"} 
      placeholder='Enter password' />

      <input type="checkbox" onChange={passwordToggle} />

    </div>
  )
}

export default App