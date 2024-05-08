import mongoose from 'mongoose'
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  {
    timestamps: true,
  }
)

const URL = mongoose.model('url', urlSchema)
export default URL
