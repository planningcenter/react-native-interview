const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
  console.log(`Live from Ernestine's basement on port: ${port}`)
})

let scores = [{ first_name: 'Gob', last_name: 'Bluth', score: 20 }]
app.get('/api/scores', (req, res) => {
  if (shouldWonkOut()) {
    return res.status(500).send(deriveError())
  }

  res.status(200).json(scores)
})

app.post('/api/scores', (req, res) => {
  if (shouldWonkOut()) {
    return res.status(500).send(deriveError())
  }

  const score = req.body
  scores = [score, ...scores]
  return res.status(200).json(score)
})

const shouldWonkOut = () => {
  const randomNumber = Math.random()
  const integer = Math.floor(randomNumber * 100)
  return integer < 22
}

const deriveError = () => {
  const randomNumber = Math.random()
  const integer = Math.floor(randomNumber * errors.length)
  return errors[integer]
}

const errors = [
  "Dab nab it, Ernestine's cat kicked over the coffee!",
  'Great googly moogly, I need a snickerdoodle.',
  "Would anyone like a diet pepsi? I'm clean out!",
  'Oh sorry honey, my bridge club called.',
]
