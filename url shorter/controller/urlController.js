const handleGetUrl = async(req, res) => {
  try {
    res.json({
      message: 'error getting url',
    })
  } catch (error) {
      console.log(error.message);
  }
}

export default handleGetUrl 
