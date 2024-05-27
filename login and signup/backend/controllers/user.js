import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import UserModel from '../models/user.js'
import { EmailVerificationHtml } from '../template/index.js'
import OtpModel from '../models/otp.js'
import jwt from 'jsonwebtoken'

export const signUpHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    if (!email || !fullName || !email) {
      res.status(400).json({
        message: 'all required fields',
        status: false,
      })
      return
    }
    const findEmail = await UserModel.findOne({ email })
    if (findEmail !== null) {
      res.status(400).json({
        message: 'email already exists',
        status: false,
      })
      return
    }
    const hashPass = await bcrypt.hash(password, 10)
    const user = await UserModel.create({
      fullName,
      email,
      password: hashPass,
    })
    const otp = Math.floor(10000 + Math.random() * 90000)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.APP_PASS,
      },
    })

    const response = await transporter.sendMail({
      from: process.env.GMAIL_ACCOUNT,
      to: email,
      subject: 'Email Verfication',
      html: EmailVerificationHtml(otp),
    })

    await OtpModel.create({
      email,
      otp,
    })
    res.status(202).json({
      message: 'user created successfully',
      data: user,
      status: true,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({
        message: 'all required fields',
        status: false,
      })
      return
    }
    const user = await UserModel.findOne({ email })
    if (!user) {
      res.status(400).json({
        message: 'email and password incorrect',
        status: false,
      })
      return
    }

    if (!user.isVerified) {
      res.status(400).json({
        message: 'account is not verified',
        status: false,
      })
      return
    }
    const comparePass = await bcrypt.compare(password, user.password)
    if (!comparePass) {
      res.status(400).json({
        message: 'email and password incorrect',
        status: false,
      })
      return
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.PRIVATE_KEY
    )
    res.status(200).json({
      message: 'user successfully logine',
      data: user,
      token,
      status: true,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
export const otpVerifyHandler = async (req, res) => {
  try {
    const { otp, email } = req.body
    if (!email || !otp) {
      res.status(400).json({
        message: 'all fields are required',
        status: false,
      })
      return
    }
    const otpRes = await OtpModel.findOne({
      email,
      otp,
    })
    // console.log(otpRes)
    if (!otpRes) {
      res.status(400).json({
        message: 'Invalid Otp ',
        status: false,
      })
    }
    await OtpModel.findOneAndUpdate(
      { _id: otpRes._id },
      {
        isUsed: true,
      }
    )
    await UserModel.findOneAndUpdate(
      { email },
      {
        isVerified: true,
      }
    )
    res.status(202).json({
      message: 'opt verification completed',
      status: true,
    })
  } catch (error) {
    res.status(501).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
