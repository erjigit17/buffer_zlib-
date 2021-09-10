'use strict'

const fs = require('fs')
const zlib = require('zlib')
const http = require('http')

const rs = fs.createReadStream('index.html')
const gs = zlib.createBrotliCompress()

const buffers = []
let buffer = null

gs.on('data', (buffer) => {
  buffers.push(buffer)
})

gs.on('end', () => {
  buffer = Buffer.concat(buffers)
})

rs.pipe(gs)

const server = http.createServer((req, res) =>{
  console.log(req.url)
  res.writeHead(200, {'Content-Encoding': 'br'})
  res.end(buffer)
})

server.listen(3000)