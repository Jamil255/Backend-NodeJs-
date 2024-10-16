import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: [true, 'enter a user name'],
  },
  email: {
    type: String,
    require: [true, 'enter a email'],
  },
  password: {
    type: String,
    require: [true, 'enter a password'],
  },
})
const userModel = mongoose.model('user', userSchema)
export default userModel
