import { Router } from 'express'
import { sendResFun } from '../controllers/index.js'

const routes = Router()

routes.get('/', sendResFun)
export default routes
