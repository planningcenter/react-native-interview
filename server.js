const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
  console.log(`Live from Ernestin's basement on port: ${port}`)
})

let scores = [{ first_name: 'Gob', last_name: 'Bluth', score: 20 }]
app.get('/api/scores', (req, res) => {
  res.status(200).json(scores)
})

app.post('/api/scores', (req, res) => {
  if (shouldWonkOut()) {
    res.status(500).send("Dab nab it, Ernestine's cat kicked over the coffee")
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
