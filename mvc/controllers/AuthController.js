import UserModel from '../models/userSchema.js'
import userSchema from '../models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
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
    const user = await UserModel.find({})
    res.json({
      data: user,
      message: 'get user',
      status: 200,
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
