'use strict'

const fs = require('fs')

const files = ['./js/fs.js', 'untitle.js', './js/write_file.js']

const stats = new Array(files.length)

const maxIndex = files.length - 1

const printResult = () => {
  console.log({ stats })
}
files.forEach((file, i) => {
  console.dir({ file, i })
  fs.lstat(file, (err, stat) => {
    if (err) {
      console.log(`File ${file} not found`)
    } else {
      stats[i] = stat
    }
    if (i === maxIndex) printResult()
  })
})
