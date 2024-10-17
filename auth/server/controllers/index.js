import userModel from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signUpHandler = async (req, res) => {
  try {
    const { userName, password, email } = req.body
    if (!userName || !password || !email) {
      return res.status(400).json({
        message: 'all field is required',
      })
    }
    const user = await userModel.findOne({ email })
    if (user !== null) {
      return res.status(401).json({
        message: 'User already exists',
      })
    }
    const hashpass = await bcrypt.hash(password, 10)
    const userCreate = await userModel.create({
      userName,
      password: hashpass,
      email,
    })
    res.status(201).json({
      message: 'User created',
      data: userCreate,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}
const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'input is required',
      })
    }
    const user = await userModel.findOne({ email })

    if (!user) {
      res.status(401).json({
        message: 'invalid email and password',
      })
      return
    }
    const comparePass = await bcrypt.compare(password, user.password)

    if (!comparePass) {
      res.status(401).json({
        message: 'invalid email and password',
      })
      return
    }
    const token = jwt.sign(
      {
        _id: user?._id,
        email: user?.email,
      },
      'tokenmsmmsms'
    )
    return res.status(200).json({
      message: 'successfully login',
      data: user,
      token,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}
export { signUpHandler, loginHandler }
