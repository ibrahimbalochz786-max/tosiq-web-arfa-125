import express from 'express'
import { getAllColors } from '../controllers/data.controller.js'

const dataRouter = express.Router()


// http://localhost:3000/colors
dataRouter.get("/colors", getAllColors)

export default dataRouter