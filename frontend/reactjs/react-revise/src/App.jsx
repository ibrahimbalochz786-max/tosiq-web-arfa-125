import React from 'react'
import SimpleButton from './components/SimpleButton'
import BoxWrraper from './components/BoxWrraper'

const App = () => {
  return (
    <div>
      <div className='bg-slate-900 app-name'>
        App
      </div>
      <div>
        <BoxWrraper>
          <ins>This is small tag</ins>
        </BoxWrraper>
      </div>
      <div>
        <BoxWrraper>
          <SimpleButton title="Contact us" />
          <SimpleButton title="Explore more"  />
          <SimpleButton title="Join us"  />
        </BoxWrraper>
      </div>
    </div>
  )
}

export default App
