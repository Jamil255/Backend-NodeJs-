import express from 'express'
import {
  loginHandler,
  signUpHandler,
  otpVerfication,
} from '../controllers/index.js'
const routes = express.Router()

routes.post('/api/signup', signUpHandler)
routes.post('/api/login', loginHandler)
routes.post('/api/otpVerify', otpVerfication)
export default routes
