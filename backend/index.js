const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 303

app.get('/', (req, res) => {
  res.send('Hello world')
})


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})