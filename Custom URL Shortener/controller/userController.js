import userModel from '../models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import {setUser}from "../services/helperfun.js"
const handleSingUpFun = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
      res.json({
        message: 'input field required',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.hash(password, 10)
    const obj = {
      ...req.body,
      password: hashPass,
    }
    const user = await userModel.create(obj)
    res.render('home')
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    })
  }
}

const handleSingInFun = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.json({
        message: 'input field required',
        status: false,
      })
      return
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.render('login')
    }
    const comparePass = await bcrypt.compare(password, user?.password)
    if (!comparePass) {
      res.json({
        message: 'email and password invalid',
        status: false,
      })
      return
    }
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.cookie('uid', sessionId)
    return res.redirect('/api/home')
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}

export { handleSingUpFun, handleSingInFun }
