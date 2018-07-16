const  http = require('http');
const route = require('./route');
const port = 8080;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    req.on('data',async (data,err)=>{
        req.body = JSON.parse(data);
        const ethData = await route.createRoute(req,res);
        res.write(JSON.stringify(ethData))
        res.end()
    })
}).listen(port);
console.log(`Server Running on :${port}`);