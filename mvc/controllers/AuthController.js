import { response } from 'express'
import UserModel from '../models/userSchema.js'
import userSchema from '../models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
const signupController = async (req, res) => {
  try {
    const { fullName, age, email, password, gender, phone } = req.body
    if (!fullName || !age || !email || !password || !gender || !phone) {
      res.json({
        message: 'Required fields are missing ',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.hash(password, 10)
    const user = await UserModel.findOne({ email })
    if (user !== null) {
      res.json({
        message: 'email already exists',
        status: req.method,
      })
      return
    }

    const obj = {
      ...req.body,
      password: hashPass,
    }
    const userRespone = await UserModel.create(obj)
    res.json({
      data: userRespone,
      status: true,
      message: 'User signup successfully',
    })
  } catch (error) {
    res.json({
      message: error.message,
      status: error.status,
      data: [],
    })
  }
}
const signInController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.json({
        message: ' input field required',
        status: false,
      })
      return
    }

    const user = await UserModel.findOne({ email })
    if (!user) {
      res.json({
        message: 'email and password incorrect',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.compare(password, user.password)
    if (!hashPass) {
      res.json({
        message: 'email and password incorrect',
        status: false,
      })
      return
    }
    const token = await jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      'PRIVATEKEY'
    )
    res.status(201).json({
      message: 'user login successfully',
      status: true,
      data: user,
      token,
    })
  } catch (error) {
    res.json({
      message: error.message,
      data: [],
      status: 500,
    })
  }
}

export { signupController, signInController }
