import express from 'express'
import {handleSingUpFun, handleSingInFun, OTPVerification, } from '../controllers/authController.js'
const route = express.Router()
route.post('/api/signup', handleSingUpFun)
route.post('/api/signin', handleSingInFun)
route.post("/api/otpverification" , OTPVerification)

 

export default route
