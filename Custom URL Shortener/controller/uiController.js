import { urlencoded } from 'express'
import URL from '../models/url.js'
const handleHomePage = async (req, res) => {
  try {
    const allUrls = await URL.find({})
    return res.render('home', {
      urls: allUrls,
    })
  } catch (error) {}
}

export { handleHomePage }
