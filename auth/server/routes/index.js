import express from 'express'
import signUpHandler from '../controllers/index.js'
const routes = express.Router()

routes.post("/api/signup", signUpHandler)
export default routes
