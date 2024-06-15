import mongoose from 'mongoose'
const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const OtpModel = mongoose.model('Otp', otpSchema)
export default OtpModel
