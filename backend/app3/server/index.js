import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import employeeRouter from './modules/employee/employee.routes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT
const PREFIX = "/api/v1"

app.use(PREFIX, employeeRouter)

app.get("/check-health", (req, res) => {
    return res.send({ status: true, message: "Server is running..." })
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at http://localhost:${PORT}`)
    })
}).catch((e) => {
    console.log("Error:", e)
})