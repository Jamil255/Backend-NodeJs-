import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.json({ status: 'success' }))
app.listen(PORT, () => console.log('`port` is runing at http://localhost:300'))
