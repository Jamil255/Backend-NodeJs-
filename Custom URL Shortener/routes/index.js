import express from 'express'
import {
  handleGenericShortUrl,
  handleGetAnalytics,
  handleGetShortUrl,
} from '../controller/urlController.js'
import {restrictOnlyUser} from '../middlewares/Auth.js'
const route = express.Router()

route.post('/api/url', restrictOnlyUser, handleGenericShortUrl)
route.get('/api/url/:shortId', handleGetShortUrl)
route.get('/api/url/analytics/:shortId', handleGetAnalytics)

export default route
