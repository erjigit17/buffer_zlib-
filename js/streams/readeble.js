'use strict'

const fs = require('fs')

const rs = fs.createReadStream('./img/video.av1.mp4')

// rs.on('readable', () => {
//   console.log('readable')
//   const buffer = rs.read()
//   if (buffer) {
//     console.log(buffer)
//   }
// })
let i = 0
rs.on('data', chunk => {
  ++i
  console.log(i, 'data')
  // console.log(chunk)
})
