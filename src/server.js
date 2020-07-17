import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

export const app = express()
app.use(cors())
app.use(morgan('combined'))

app.get('/:query', (req, res) => {
  try {
    const query = req.params.query

    // res.setHeader('Cache-Control', 'public, max-age=8640000') // 100 days
    res.send(`boop ${query}`)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
