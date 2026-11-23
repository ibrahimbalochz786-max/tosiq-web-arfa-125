import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import axios from 'axios'
const EditUser = () => {
    const { register, handleSubmit, reset } = useForm()
    const params = useParams()
      
    const getSingleUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/all-users/edit/${params.id}`)
            if (response.data.status == true) {
                console.log(response.data.message)
                reset(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateUser = async (data) => {
        console.log(data)
    }

    useEffect(() => {
        if (params.id) {
            getSingleUser()
        }
    }, [params.id])

    return (
      <div>
          <h2> Edit user [#{params.id}]</h2>
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <div>
              <input { ...register("name") } type="text" placeholder='User name' />
          </div>
          <div>
              <input { ...register("email") } type="text" placeholder='User email' />
          </div>
          <div>
              <button>Update data</button>
          </div>
        </form>
      </div>
    )
}

export default EditUser