import express from 'express'
import people from './data.js'
const app = express()
app.use(express.json()) // for line 14 to work.

const port = 3033

app.get('/people', (req, res) => {
    res.send(people)
})

app.post('/people', (req, res) => {
const newPerson = req.body
people.push(newPerson)
res.send(people)
})

app.listen(port, () => console.log(`Listening to http://localhost:${port}...`))

