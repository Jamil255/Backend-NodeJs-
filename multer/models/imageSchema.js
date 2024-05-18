import mongoose from 'mongoose'
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
})

const imageModel = mongoose.model('img', imageSchema)

export { imageModel }
