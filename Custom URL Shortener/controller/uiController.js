import { urlencoded } from 'express'
import URL from '../models/url.js'
const handleHomePage = async (req, res) => {
  try {
    if (!req.user) return res.redirect('/api/login')
    const allUrls = await URL.find({ createdBy: req.user._id })
    return res.render('home', {
      urls: allUrls,
    })
  } catch (error) {}
}

const handleSignupPage = async (req, res) => {
  try {
    return res.render('signup')
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

const handleSignInPage = async (req, res) => {
  try {
    return res.render('login')
  } catch (error) {}
}
export { handleHomePage, handleSignupPage, handleSignInPage }
