import React, { useState } from 'react'
import SimpleButton from './components/SimpleButton'
import InputField from './components/InputField'
import Card from './components/Card'

const App = () => {
  const [activeTab, setActiveTab] = useState("settings")

  const changeTab = (currentTab) => {
    setActiveTab(currentTab)
  }

  return (
    <div className='m-5'>
      {/* Active tab: {activeTab} */}
      <div className='my-3 shadow max-w-lg p-3 rounded'>
        {/* tab buttons */}
        <div className='flex gap-5 border-b border-gray-200'>
          <button onClick={() => changeTab("settings")}>Settings</button>
          <button onClick={() => changeTab("locations")}>Locations</button>
          <button onClick={() => changeTab("services")}>Services</button>
        </div>

        {/* tab content */}
        <div className='mt-3 p-3 rounded bg-gray-200'>
          {
            activeTab == "settings" ?
            <div>Setting content</div> :
            activeTab == "locations" ?
            <div>Location content</div> :
            activeTab == "services" &&
            <div>Service content</div>
          }
        </div>
      </div>

      <hr />
      
      <div className='my-3'>
        <h2>Heading: Card component ui with children</h2>
        
        <Card>
          <div className='rounded bg-gray-900 text-white p-3'>Card header</div>
          <div className='my-3'>
            Quick brown fox jumps over the lazy dog
          </div>
          <div className='rounded bg-gray-900 text-white p-3'>Card footer</div>
        </Card>

        <Card>
          <div className='bg-blue-200 p-3 rounded'>
            Main page heading
          </div>
        </Card>

        <Card>
          <div className='bg-amber-200 p-3 rounded'>
            Contact form
          </div>
        </Card>
      </div>

      <div className='flex gap-3'>
        <SimpleButton title="Get Now"/>
        <SimpleButton title="Explore More"/>
        <SimpleButton title="Contact Us"/>
        <SimpleButton title="Signup"/>
        <SimpleButton title="Download CV"/>
      </div>
      <div className='my-3 flex flex-col gap-3 w-fit'>
        <InputField type='text' placeholder="e.g: John Carlos"/>
        <InputField type='text' placeholder="e.g: john.carlos" />
        <InputField type='email' placeholder="e.g: john@email.com" />
        <InputField type='password' placeholder="Password" />
      </div>

    </div>
  )
}

export default App
