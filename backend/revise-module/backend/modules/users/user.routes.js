import express from 'express'
import { getAllUsers } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/all-users", getAllUsers)

export default userRouter

