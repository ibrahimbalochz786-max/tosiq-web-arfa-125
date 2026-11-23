import express from 'express'
import { getAllUsers, deleteUser } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/all-users", getAllUsers)
userRouter.delete("/all-users/delete/:id", deleteUser)

export default userRouter

