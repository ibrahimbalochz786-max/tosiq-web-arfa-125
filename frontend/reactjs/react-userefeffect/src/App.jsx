import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)
  let number1 = useRef(null)
  let number2 = useRef(null)

  const getValue = () => {
    let no1 = Number(number1.current.value)
    let no2 = Number(number2.current.value)
    console.log(no1+no2)
  }

  // runs every time
  useEffect(() => {
    console.log("Runs every time")
  })
  // runs on a certain condition
  useEffect(() => {
    if (value == 5) {
      console.log("runs on a certain condition")
    }
  }, [value])

  // run only one time
  useEffect(() => {
    console.log("Run only one time")
  }, [])

  return (
    <div>
      <button onClick={() => setValue(value+1)}>Change counter value ({value})</button>
      <hr />
      <br />
      <div>
        <input type="number" ref={number1} />
        <input type="number" ref={number2} />
        <button onClick={getValue}>Get Value</button>
      </div>
    </div>
  )
}

export default App
