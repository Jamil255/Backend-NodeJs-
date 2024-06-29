import express from 'express'
import { imageUploaderFun } from '../controllers/imageUploaderFun.js'
import upload from '../middlewares/multer.js'
const routes = express.Router()
routes.post('/api/img', upload.single('img'), imageUploaderFun)
export default routes
