import express from 'express'
import { handleHomePage } from '../controller/uiController.js'
const route = express.Router()
route.get('/api/home', handleHomePage)
export default route
