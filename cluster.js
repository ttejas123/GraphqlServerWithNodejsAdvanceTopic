const cluster = require('cluster');
const http = require('http');
const OS = require('os')
const cores = OS.cpus().length
console.log(cores)

if(cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`)
    for(let i = 0; i < cores; i++) cluster.fork();
} else {
    console.log(`Worker ${process.pid} started`);
    const serever = http.createServer((req, res) => {
        if(req.url === "/") {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Home Page");
        } else if (req.url === "/slow-page") {
            for(let i = 0; i < 6000000000; i++);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Slow Page");
        }
    });
    
    serever.listen(3000, () => {
        console.log("Listening 3000")
    })
} 