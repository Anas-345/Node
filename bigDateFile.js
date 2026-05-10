import * as fs from 'node:fs'

const bigData = 'x'.repeat(100 * 1024 * 1024)

fs.writeFileSync('bigFile.txt', bigData)

console.log('file created')

const data = fs.readFileSync('bigFile.txt', 'utf-8')
console.log(data.length)

const stream = fs.createReadStream('bigFile.txt', {
    encoding: 'utf-8',
    highWaterMark: 64*1024
})

let chunks = 0

stream.on('data', chunk=>{
    chunks++
    console.log(chunks)
    console.log(chunk.length)
})