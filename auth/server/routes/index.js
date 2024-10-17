import express from 'express'
import { loginHandler, signUpHandler } from '../controllers/index.js'
const routes = express.Router()

routes.post("/api/signup", signUpHandler)
routes.post("/api/login", loginHandler)
export default routes
