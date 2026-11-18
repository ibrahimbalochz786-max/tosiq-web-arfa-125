import React, { useEffect, useState } from 'react'
import axios from  'axios'
import { Link } from 'react-router'

const Users = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/all-users")
            if (response.data.status == true) {
                setUsers(response.data.users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

  return (
    <div>
      <h1>All users</h1>
      <div>
        <Link to={'/users/add'}>Add new user</Link>
      </div>
      <div>
        <ul>
            { users.map((user, i) => {
               return (
                <li key={i}>
                    <div>
                        <h3>
                            {user.name} - <small>{user.email}</small>
                        </h3>
                    </div>
                </li>
               ) 
            }) }
        </ul>
      </div>
    </div>
  )
}

export default Users
