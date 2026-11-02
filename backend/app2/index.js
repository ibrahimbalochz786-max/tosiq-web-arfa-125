import express from 'express'
import dataRouter from './routes/data.routes.js'

const app = express()

app.use('', dataRouter)
// http://localhost:3000/check
app.get("/check", (req, res) => {
    return res.send({ status: true, message: "Server is running..." })
})

app.listen(3000, () => {
    console.log(`Server is started at http://localhost:3000`)
})