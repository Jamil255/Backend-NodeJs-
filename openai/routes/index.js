import { Router } from 'express'
import { sendResFun } from '../controllers/index.js'

const routes = Router()

routes.get('/', sendResFun)
routes.get("/",sendREsFunOnly)
export default routes
