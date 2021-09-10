'use strict'

const fs = require('fs')

const buffer = fs.readFileSync('./js/write_file.js', 'utf8')
const lines = buffer.split('\n').filter((line) => !!line)
fs.writeFileSync('./js/js.txt', lines.join('\n'))
