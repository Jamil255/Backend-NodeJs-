import { getUser } from '../services/helperfun.js'

const restrictOnlyUser = async (req, res, next) => {
  const userUid = req.cookies?.uid
  if (!userUid) return res.render('login')
  const user = getUser(userUid)
  if (!user) return res.render('login')
  req.user = user
  next()
}

const checkAuth = async (req, res, next) => {
  const userUid = req.cookies?.uid
  const user = getUser(userUid)
  req.user = user
  next()
}
export { restrictOnlyUser ,checkAuth}
