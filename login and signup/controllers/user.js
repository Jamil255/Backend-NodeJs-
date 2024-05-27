import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import UserModel from '../models/user.js'
import { EmailVerificationHtml } from '../template/index.js'
import OtpModel from '../models/otp.js'

export const signUpHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body

    // Check if all required fields are present
    if (!email || !fullName || !password) {
      return res.status(400).json({
        message: 'All required fields',
        status: false,
      })
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10)

    // Create user object with hashed password
    const user = await UserModel.create({
      fullName,
      email,
      password: hashPass,
    })

    // Generate OTP
    const otp = Math.floor(10000 + Math.random() * 90000)

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.APP_PASS,
      },
    })

    // Send verification email
    const response = await transporter.sendMail({
      from: process.env.GMAIL_ACCOUNT,  
      to:'maji4552@gmail.com', // Use the user's email address
      subject: 'Email Verification',
      html: EmailVerificationHtml(otp),
    })

    console.log(response)

    // Save OTP to the database
    const emailOtp = await OtpModel.create({
      otp,
      email,
    })

    console.log(emailOtp)

    // Send success response
    res.status(202).json({
      message: 'User created successfully',
      data: user,
      status: true,
    })
  } catch (error) {
    console.log(error.message)

    // Send error response
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}

export const loginHandler = async (req, res) => {
  try {
  } catch (error) {}
}
export const otpVerifyHandler = async (req, res) => {
  try {
  } catch (error) {}
}
