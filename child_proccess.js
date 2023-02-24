const { Worker } = require('worker_threads');
const http = require('http');

const serever = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Home Page");
    } else if (req.url === "/slow-page") {
        const worker1 = new Worker('./worker_thread.js');
        worker1.on("message", (j)=> {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Slow Page : "+j);
        })
    }
});

serever.listen(3000, () => {
    console.log("Listening 3000")
})

