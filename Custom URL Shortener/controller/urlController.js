import generateShortId from 'ssid'
import URL from '../models/url.js'
const shortId = generateShortId()
const handleGenericShortUrl = async (req, res) => {
  try {
    const body = req.body
    if (!body.url) return res.status(404).json({ error: 'url is required' })
    const response = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    })
    return res.render('home.ejs', {
      id: response.shortId,
    })
  } catch (error) {
    console.log(error.message)
  }
}

const handleGetShortUrl = async (req, res) => {
  const shortId = req.params.shortId
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }
    )
    res.redirect(entry?.redirectURL)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId
  const data = await URL.findOne({ shortId })
  return res.json({
    totalClicks: data.visitHistory.length,
    analytics: data.visitHistory,
  })
}

export { handleGenericShortUrl, handleGetShortUrl, handleGetAnalytics }
