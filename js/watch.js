'use strict'

const fs = require('fs')

fs.watch('./js/watch.js', (event, file) => {
  console.dir({ event, file })
})

changes
