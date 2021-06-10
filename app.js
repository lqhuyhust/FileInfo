const http = require('http')
const env = require('./config/env')
const routing = require('./routes')

const baseURI = `http://localhost:${env.PORT || 3000}`

http.createServer((request, response) => {
  const url = new URL(baseURI + request.url)
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Request-Method', '*')
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  response.setHeader('Access-Control-Allow-Headers', '*')

  if (request.method === 'OPTIONS') {
    response.writeHead(200)
    response.end()
  }

  routing(url, request, response)
}).listen(env.PORT || 3000)
