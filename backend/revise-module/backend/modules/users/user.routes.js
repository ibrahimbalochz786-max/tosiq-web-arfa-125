import express from 'express'
import { getAllUsers, deleteUser, singleUser } from './user.controller.js'

const userRouter = express.Router()

userRouter.get("/all-users", getAllUsers)
userRouter.delete("/all-users/delete/:id", deleteUser)
userRouter.get("/all-users/edit/:id", singleUser)

export default userRouter

