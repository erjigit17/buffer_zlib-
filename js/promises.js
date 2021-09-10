'use strict'

const fs = require('fs')

const main = async () => {
  const stream = fs.createReadStream('./js/fs.js', 'utf8')
  for await (const chunk of stream) {
    console.log(chunk)
  }
  const data = await fs.promises.readFile('./js/fs.js', 'utf8')
}

main().catch(console.error)