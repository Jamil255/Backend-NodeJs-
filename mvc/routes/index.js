import express from 'express'
import userSchema from '../models/userSchema.js'
import {signupController, signInController } from '../controllers/AuthController.js'
const route = express.Router()
route.post('/api/createuser', signupController)
route.get('/api/getuser', signInController)
export default route
