const http = require('http');

const requestListener = function(request,response){
    response.writeHead(200)
    response.end("Node Srever...");

};

const server = http.createServer(requestListener);

server.listen(80,'localhost',()=>{
    console.log("Server is running...");
})