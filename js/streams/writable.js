'use strict'

const fs = require('fs')

const rs = fs.createReadStream('./img/video.av1.mp4')
const ws = fs.createWriteStream('./img/video_1.av1.mp4')

rs.on('data', (buffer) => {
  console.log('Copy ' + buffer.length + ' chars')
  ws.write(buffer)
})

rs.on('end', () => {
  console.log('Done')
})
