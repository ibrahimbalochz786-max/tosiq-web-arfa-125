import express from 'express'
import { allEmployees } from './employee.controller.js'

const employeeRouter = express.Router()

employeeRouter.get("/employees", allEmployees)

export default employeeRouter