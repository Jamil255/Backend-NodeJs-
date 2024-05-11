import express from 'express'
import userModel from '../models/userSchema.js'
import { handleSingInFun, handleSingUpFun } from '../controller/userController.js'
const route = express.Router()
route.post('/api/signup', handleSingUpFun)
route.post('/api/login',handleSingInFun)

export default route
