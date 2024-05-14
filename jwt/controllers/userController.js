import userModel from '../models/userSchema.js'
import bcrypt, { hash } from 'bcrypt'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { EmailVerificationHtml } from '../template/index.js'
import OtpModel from '../models/OtpSchema.js'
import { response } from 'express'

const handleSignUpFun = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    if (!email || !password || !fullName) {
      res.json({
        message: 'input field is required',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.hash(password, 10)
    const obj = {
      ...req.body,
      password: hashPass,
    }
    const userRes = await userModel.create(obj)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.APP_PASS,
      },
    })
    const otp = Math.floor(100000 + Math.random() * 900000)

    await transporter.sendMail({
      from: process.env.GMAIL_ACCOUNT,
      to: email,
      subject: 'Email Verfication',
      html: EmailVerificationHtml(otp, userRes?.fullName),
    })
    await OtpModel.create({
      otp,
      email,
    })
    res.json({
      message: 'user successfully signup',
      status: true,
      data: userRes,
    })
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}
const handleSignInFun = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.json({
        message: 'input field  are required',
        status: false,
      })
      return
    }

    const user = await userModel.findOne({ email })
    if (!user) {
      res.json({
        message: 'email and password is incorrect',
        status: false,
      })
      return
    }
    const comparePass = await bcrypt.compare(password, user.password)
    if (!comparePass) {
      res.json({
        message: 'email and password  invalid',
        status: false,
      })
      return
    }
    const token = await jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.PRIVATE_KEY
    )
    res.json({
      message: 'Your account has been successfully login',
      status: true,
      token,
    })
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}
const handleOtpVerifyFun = async (req, res) => {
  try {
    const { email, otp } = req.body
    if (!email || !otp) {
      res.json({
        message: 'invalid otp',
        status: false,
      })
      reutrn
    }
    const otpRes = await OtpModel.findOne({ email, otp })
    if (!otpRes || otpRes.isUsed) {
      res.json({
        message: 'invalid otp',
        status: false,
      })
      return
    }
    await OtpModel.findOneAndUpdate(
      {
        _id: otpRes._id,
      },
      { isUsed: true }
    )
    res.json({
      message: 'otp verification successfully',
      status: true,
      data: [],
    })
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}

export { handleSignUpFun, handleSignInFun, handleOtpVerifyFun }
