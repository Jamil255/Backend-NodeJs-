import express from 'express'
import userSchema from '../models/userSchema.js'
import {signupController, signInController } from '../controllers/AuthController.js'
const route = express.Router()
route.post('/api/signup', signupController)
route.post('/api/signin', signInController)
export default route
