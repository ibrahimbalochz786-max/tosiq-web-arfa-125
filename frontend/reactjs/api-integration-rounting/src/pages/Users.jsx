import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {USERS_API} from '../utils/apis.js'

const Users = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            const response = await axios.get(USERS_API)
            setUsers(response.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
  return (
    <div>
        <Navbar />
        <div className='my-5 mx-auto max-w-4xl'>
            <div className='grid grid-cols-12 gap-3'>
                {
                    users.map((usr)=> {
                        return (
                            <div className='col-span-4'>
                                <div className='bg-white shadow rounded-lg p-5'>
                                    <div>
                                        <div className='font-bold'>
                                            {usr.firstName}
                                        </div>
                                        <div className='text-gray-500'>
                                            {usr.company.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Users
