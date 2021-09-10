'use strict'

const fs = require('fs')
const zlib = require('zlib')

const rs = fs.createReadStream('index.html')
const ws = fs.createWriteStream('index.html.br')
const gs = zlib.createBrotliCompress()

rs.pipe(gs).pipe(ws)

rs.on('end', () => {
  console.log('Done')
})
