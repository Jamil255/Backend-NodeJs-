import express from 'express'
import {handleSingUpFun, handleSingInFun, } from '../controllers/authController.js'
const route = express.Router()
route.post('/api/signup', handleSingUpFun)
route.post('/api/signin', handleSingInFun)
 

export default route
