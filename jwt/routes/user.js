import express from 'express'
import { handleOtpVerifyFun, handleSignInFun, handleSignUpFun } from '../controllers/userController.js'
const route = express.Router()
route.post('/api/signup', handleSignUpFun)
route.post('/api/signin', handleSignInFun)
route.post('/api/otpverify', handleOtpVerifyFun)
export default route
