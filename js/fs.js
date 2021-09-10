'use strict'

const fs = require('fs')

const buffer = fs.readFileSync('./js/fs.js')
const src = buffer.toString()

console.log('Buffer length: ' + buffer.length)
console.log(buffer)
console.log(src)
const lines = src.split('\n').filter((line) => !!line)
console.log(lines)
