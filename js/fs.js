'use strict'

const fs = require('fs')

const buffer = fs.readFileSync('./js/fs.js', 'utf8')
const src = buffer.toString()

console.log('Buffer length: ' + buffer.length)
console.log(buffer)
const lines = buffer.split('\n').filter((line) => !!line)
console.log(lines)
 