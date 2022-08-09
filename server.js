const http = require('http');
const express = require('express')
const { sendProducts } = require('./sendProducts2')
const { createUser, createPost } = require('./app');
const { create } = require('domain');

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ message: '/ pong' })
})

app.post('/singup', createUser)
app.post('/login', (req, res) => {res.json('login seccess')})
app.get('/prodeucts', sendProducts)
app.post('/posts', createPost)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})