'use strict'

const fs = require('fs')

fs.readFile('./js/fs.js', 'utf8', (err, buffer) => {
  if (err) {
    console.log(err)
    process.exit(0)
  }
  console.log('File size: ' + buffer.length)
  const lines = buffer.split('\n').filter((line) => !!line)
  const content = lines.join('\n')
  fs.writeFile('./js/js_async.txt', content, err => {
    if (err) {
      console.log(err)
      process.exit(0)
    }
    console.log('New file size: ' + content.length)
  })
})

console.log('Reade file async example')