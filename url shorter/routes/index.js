import express from "express"
import  handleGetUrl  from "../controller/urlController.js"
const route = express.Router()

route.get("/api/url", handleGetUrl)


export default  route