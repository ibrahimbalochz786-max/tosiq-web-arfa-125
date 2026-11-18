import React from 'react'
import { useForm } from 'react-hook-form'

const AddUser = () => {
    const { register, handleSubmit } = useForm()
    
    const handleAddData = async (data) => {
        console.log(data)
    }
  return (
    <div>
        <h2> Add new user </h2>
      <form onSubmit={handleSubmit(handleAddData)}>
        <div>
            <input { ...register("name") } type="text" placeholder='User name' />
        </div>
        <div>
            <input { ...register("email") } type="text" placeholder='User email' />
        </div>
        <div>
            <button>Save data</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
