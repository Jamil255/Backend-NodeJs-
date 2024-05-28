import jwt from 'jsonwebtoken'
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    next()
  } catch (error) {
    console.log(error)
  }
}
