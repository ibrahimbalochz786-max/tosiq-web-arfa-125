import express from 'express'
import connectDB from './config/db.js'
import userRouter from './modules/users/user.routes.js'

const app = express()

const port = 3000

app.use("", userRouter)

app.get('/check-health', (req, res) => {
    return res.send({ status: true, sum: 4+4, message: "Server is running..." })
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is started at http://localhost:${port}`)
    })
}).catch((e) => {
    console.log("Error", e)
})