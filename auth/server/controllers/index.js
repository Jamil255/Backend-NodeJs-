const signUpHandler = async (req, res) => {
  try {
    const { userName, password, email } = req.body
    console.log(userName, password, email)
  } catch (error) {
    res.json({
      error: error.message,
    })
  }
}
export default signUpHandler
