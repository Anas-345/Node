import http from "node:http";

const server = http.createServer((req, res)=> {
  res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  try {
    res.writeHead(200, {"content-type": 'application/json'})
    res.end(JSON.stringify({content: 'Hello'}))
  } catch (error) {
    console.log('error', error)
  }
})

server.listen(3000, ()=> console.log('I am running'))