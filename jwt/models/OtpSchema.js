import mongoose from 'mongoose'
const OtpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    isUsed: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
)

const OtpModel = mongoose.model('otp', OtpSchema)

export default OtpModel
