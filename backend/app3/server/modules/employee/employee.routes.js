import express from 'express'
import { allEmployees } from './employee.controller.js'

const employeeRouter = express.Router()

// http://localhost:3000/api/v1/employees
employeeRouter.get("/employees", allEmployees)

export default employeeRouter