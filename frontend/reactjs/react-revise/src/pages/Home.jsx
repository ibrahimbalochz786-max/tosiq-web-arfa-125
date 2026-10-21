import React from 'react'
import BoxWrraper from '../components/BoxWrraper'
import SimpleButton from '../components/SimpleButton'
import WebLayout from '../layouts/WebLayout'
import toast from 'react-hot-toast'
import { BotMessageSquare, Bug } from 'lucide-react'

const Home = () => {
    const showToast = () => {
        toast.error("Failed to create an account")
    }
  return (
    <WebLayout>
      <div className='bg-slate-900 app-name flex p-3 items-center gap-3'>
        <BotMessageSquare className='mt-[3px]'/>
        <Bug className='mt-[3px]' />
        <span>App</span>
      </div>
      <div className='m-3'>
        <button className='bg-teal-800 p-3 rounded text-white ' onClick={showToast}>Click to show toast</button>
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
    </WebLayout>
  )
}

export default Home