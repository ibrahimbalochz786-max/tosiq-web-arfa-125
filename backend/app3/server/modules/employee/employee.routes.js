import express from 'express'

const employeeRouter = express.Router()

employeeRouter.get("/employees", allEmployees)

export default employeeRouter