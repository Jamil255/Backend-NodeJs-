import mongoose from 'mongoose'
const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: Number,
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
const otpModel = mongoose.model('otp', otpSchema)
export default otpModel
