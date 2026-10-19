import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import axios from 'axios'
import { USER_API } from '../utils/apis'

const UserDetails = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()
    // https://dummyjson.com/users/id
    const getUser = async () => {
        try {
            const response = await axios.get(`${USER_API}/${id}`)
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id > 0) {
            getUser()
        }
    }, [id])
    return (
        <div>
            <Navbar />
            <div className='my-5 mx-auto max-w-4xl'>
                <div>
                    User details [#{id}]
                </div>
                <div>
                    {user.firstName} - {user.email}
                </div>
            </div>
        
        </div>
    )
}

export default UserDetails
