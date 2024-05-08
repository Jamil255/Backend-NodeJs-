import { urlencoded } from 'express'
import URL from '../models/url.js'
const handleHomePage = async (req, res) => {
  try {
    console.log(req.url)
    return res.render('home.ejs',{async: true})
  } catch (error) {}
}

export { handleHomePage }
