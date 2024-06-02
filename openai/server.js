import express from 'express'
import OpenAI from 'openai'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  })
  console.log(chatCompletion)
}

main()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
