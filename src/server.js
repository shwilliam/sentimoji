import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import Sentiment from 'sentiment'
import {sortByFirstValueAsc} from './utils'

// based *very* loosely on the findings of Sentiment of Emojis
// reference: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144296
import EMOJI_DICT from './emoji.json'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.get('/:query', (req, res) => {
  try {
    const query = req.params.query

    const sentiment = new Sentiment()
    const result = sentiment.analyze(query)
    const score = result.score

    const emojiDictEntries = Object.entries(EMOJI_DICT)
    const emoji = emojiDictEntries
      .sort(sortByFirstValueAsc)
      .find(
        ([scoreBoundary], idx) =>
          score < Number(scoreBoundary) || idx === emojiDictEntries.length - 1,
      )[1]

    res.setHeader('Cache-Control', 'public, max-age=8640000') // 100 days
    res.send(emoji)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
