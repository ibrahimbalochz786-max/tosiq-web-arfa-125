import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { Link } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { EMPLOYEES_API } from '../utils/server_apis.js'

const Employees = () => {

  const [employees, setEmployees] = useState([])

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(EMPLOYEES_API)
      if (response.data.status == true) {
        setEmployees(response.data.employees)
      } else {
        toast.error("Something went wrong!")
      }
    } catch (error) {
      toast.error("Internal server error")
      console.error(error)
    }
  }

  useEffect(() => {
    getAllEmployees()
  }, [])
  return (
    <WebLayout>
      <div className='px-6 py-10'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-xl font-bold'>Employees</div>
            <div className='text-gray-500 text-sm'>
              All employees onboard
            </div>
          </div>

          <Link
            className='bg-blue-600 text-white shadow-sm rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'
            to={"/employees/add"}>Add employee</Link>
        </div>

        {/* table */}
        <div className="mt-5 rounded-xl bg-white p-5 shadow-md">

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-600">
                  <th className="px-4 py-4 font-semibold">#</th>
                  <th className="px-4 py-4 font-semibold">Name</th>
                  <th className="px-4 py-4 font-semibold">Email</th>
                  <th className="px-4 py-4 font-semibold">Designation</th>
                  <th className="px-4 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                { employees.map((employee, i) => (
                  <tr
                    key={employee._id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 text-gray-500">
                      {i+1}
                    </td>

                    <td className="px-4 py-4 font-medium text-gray-800">
                      {employee.name}
                    </td>

                    <td className="px-4 py-4 text-gray-500">
                      {employee.email}
                    </td>

                    <td className="px-4 py-4 text-gray-600">
                      {employee.designation}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-blue-600 transition hover:text-blue-800">
                          Edit
                        </button>

                        <button className="text-red-500 transition hover:text-red-700">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </WebLayout>
  )
}

export default Employees