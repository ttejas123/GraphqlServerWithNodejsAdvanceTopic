const http = require('http');

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