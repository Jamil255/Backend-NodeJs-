import bcrypt from 'bcrypt'
import userModel from '../models/userSchema.js'
import jwt from 'jsonwebtoken'

const handleSingUpFun = async (req, res) => {
  try {
    const { fullName, email, password, gender, age } = req.body
    if (!fullName || !email || !password || !gender || !age) {
      res.json({
        message: 'input field is required',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.hash(password, 10)
    const user = await userModel.findOne({ email })
    if (user !== null) {
      res.json({
        message: 'email is already in use',
        status: false,
      })
      return
    }
    const obj = {
      ...req.body,
      password: hashPass,
    }
    const userResponse = await userModel.create(obj)
    res.json({
      message: 'user created successfully',
      status: true,
      data: userResponse,
    })
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
        message: 'input field is required',
        status: false,
      })
      return // Ensure to return after sending the response
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      res.json({
        message: 'email and password invalid',
        status: false,
      })
      return
    }
    const comparePass = await bcrypt.compare(password, user.password)
    if (!comparePass) {
      res.json({
        message: 'email and password invalid',
        status: false,
      })
      return
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      'PRIVATEKEY'
    )
    res.json({
      message: 'user login in successfully',
      data: user,
      status: true,
      token,
    })
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
    })
  }
}

export { handleSingUpFun, handleSingInFun }
