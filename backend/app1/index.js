import express from 'express'

const app = express()

const list = [ "Black", "Purple", "Blue", "Green", "Yellow" ]

app.get("/colors", (req, res) => {
    return res.send({ status: true, list })
})

// http://localhost:3000/check
app.get("/check", (req, res) => {
    return res.send({ status: true, message: "Server is running..." })
})

app.listen(3000, () => {
    console.log(`Server is started at http://localhost:3000`)
})