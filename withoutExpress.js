const http = require('http') //----- 1

console.log(1)

const server = http.createServer((req, res) => { //----- 2
  console.log('request received')

  res.setHeader('Content-Type', 'application/json') //----- 3
  res.end(JSON.stringify({ message: "Welcome to JUSTCODE server! Http server without express" })) // 4
});

server.listen(8000, () => {
  console.log('server is running on PORT 8000')
}) // 5