import userModel from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { EmailVerificationHtml } from '../template/index.js'
import otpModel from '../models/otpSchema.js'

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
    const otp = Math.floor(100000 + Math.random() * 900000)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_ACCOUNT,
        pass: process.env.ADMIN_PASSWORD,
      },
    })
    const info = await transporter.sendMail({
      from: process.env.ADMIN_ACCOUNT,
      to: email,
      subject: 'Email Verfication',
      html: EmailVerificationHtml(otp, userName),
    })
    await otpModel.create({ otp, email })
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
    if (!user?.isVerified) {
      return res.status(401).json({
        message: 'account is not verified',
      })
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
      'tokenmsmmsms',
      { expiresIn: 5 * 60 } // Set expiration to 5 minutes (5 * 60 seconds)
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
const otpVerfication = async (req, res) => {
  try {
    const { email, otp } = req.body
    if (!email || !otp) {
      return res.status(400).json({
        message: 'input field is required',
      })
    }

    const user = await otpModel.findOne({ email, otp })
    if (!user || user?.isUsed) {
      return res.status(400).json({
        message: 'invalid otp verification',
      })
    }
    const optRes = await otpModel.findOneAndUpdate(
      { _id: user._id },
      { isUsed: true }
    )
    const emailverifed = await userModel.findOneAndUpdate(
      { email },
      { isVerified: true }
    )
    return res.status(200).json({
      message: 'otp verification successfully',
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
export { signUpHandler, loginHandler, otpVerfication }
