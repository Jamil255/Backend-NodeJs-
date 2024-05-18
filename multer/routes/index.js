import express from 'express'
import imageUpload from '../controllers/imageUpload.js'
import upload from '../middlewares/multer.js'
const routes = express.Router()

routes.post('/api/imageupload', upload.single('img'), imageUpload)

export default routes
