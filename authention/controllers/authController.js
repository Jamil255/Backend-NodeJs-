import bcrypt from 'bcrypt'
import userModel from '../models/userSchema.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { EmailVerificationHtml } from '../template/index.js'
import OtpModel from '../models/otpSchema.js'

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
    const otp = Math.floor(100000 + Math.random() * 900000)
    const userResponse = await userModel.create(obj)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.APP_PASS,
      },
    })

    const response = await transporter.sendMail({
      from: process.env.GMAIL_ACCOUNT,
      to: 'maji4552@gmail.com',
      subject: 'Email Verfication',
      html: EmailVerificationHtml(otp),
    })
    await OtpModel.create({
      otp,
      email,
    })
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

export const OTPVerification = async (request, response) => {
  try {
    const { email, otp } = request.body

    if (!email || !otp) {
      response.json({
        message: 'required fields are missing!',
        status: false,
      })
      return
    }

    const otpRes = await OtpModel.findOne({ email, otp })
    if (!otpRes || otpRes.isUsed) {
      response.json({
        message: 'Invalid OTP!',
        status: false,
      })
      return
    }
    const ress = await OtpModel.findOneAndUpdate(
      { _id: otpRes._id },
      {
        isUsed: true,
      }
    )
    response.json({
      message: 'OTP Verify!',
      status: true,
      data: [],
    })
    // console.log()
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}

export { handleSingUpFun, handleSingInFun }
