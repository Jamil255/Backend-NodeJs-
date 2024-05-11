import express from 'express'
import { handleHomePage, handleSignInPage, handleSignupPage } from '../controller/uiController.js'
import { checkAuth } from '../middlewares/Auth.js'
const route = express.Router()
route.get('/api/home',checkAuth, handleHomePage)
route.get("/api/signup",handleSignupPage)
route.get("/api/login",handleSignInPage)
export default route
