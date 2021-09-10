'use strict'

const buffer = Buffer.from('Erjigit Imamov')
if (buffer.includes('Erjigit')) {
  console.log(`"${buffer.toString()}" includes "Erjigit"`)
}

const k = buffer.indexOf('Imamov')
console.log(`Index of "Imamov" is ${k}`)
console.log(`Slice 3-5 "${buffer.slice(3, 6)}"`)
