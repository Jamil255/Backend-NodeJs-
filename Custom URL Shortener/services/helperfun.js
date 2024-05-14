import jwt from 'jsonwebtoken'
const secret = 'jamil255@'
const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  )
}
const getUser = (token) => {
  try {
    if (!token) return null
    return jwt.verify(token, secret)
  } catch (error) {
    console.log(error.message)
  }
}

export { setUser, getUser }
