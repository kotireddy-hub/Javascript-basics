const http = require('http');

const requestListener = function(request,response){
    const companies = ["SAP","Swooptalent","Rubiestech"];
    const convertCompaniesToString = JSON.stringify(companies);
    response.end(convertCompaniesToString)
};

const server = http.createServer(requestListener);

server.listen(81,"localhost",()=>{
    console.log("Server is running...")
});