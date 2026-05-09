import http from 'node:http'

const server = http.createServer((req, res)=> {
    res.end('My First node server')
})

server.listen(3000, ()=>{
    console.log('server is running')
})