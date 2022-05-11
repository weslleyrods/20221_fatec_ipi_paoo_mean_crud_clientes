const http = require('http')
const server = http.createServer(
(req, res) => {
  res.end("Hello from the backend")
})

server.listen(process.env.PORT || 3000)
//console.log("Hello, Nodejs");
