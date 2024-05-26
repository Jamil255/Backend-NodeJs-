import express from 'express'
import {
  loginHandler,
  otpVerifyHandler,
  signUpHandler,
} from '../controllers/user.js'
const routes = express.Router()

// auth api
routes.post('/api/signup', signUpHandler)
routes.post('/api/login', loginHandler)
routes.post('/api/otpVerify', otpVerifyHandler)

export default routes
