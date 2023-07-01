const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const db = require('./queries')
const cors = require('cors');
app.use(cors());

// Add the following middleware before defining your routes

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/projects', db.getProjects)
app.get('/users/:id', db.getUserById)




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})