const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const newsletter = require('./newsletter')

app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/newsletter', newsletter)

module.exports = app
