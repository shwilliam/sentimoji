import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import Sentiment from 'sentiment'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.get('/:query', (req, res) => {
  try {
    const query = req.params.query

    const sentiment = new Sentiment()
    const result = sentiment.analyze(query)
    const score = result.score

  } catch (error) {
    res.status(500).send(error.message)
  }
})
