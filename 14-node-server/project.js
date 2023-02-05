const http = require("http");
const fs = require('fs');

const categories = fs.readFileSync('data/categories.json');//buffer data
const products = fs.readFileSync('data/products.json');

const requestListener  = function(request,response){
    console.log(`Server Request URL `,request.url);
    const REQUEST_URL = request.url;
    if(REQUEST_URL === "/products"){
        response.end(products);
    }else if(REQUEST_URL === "/categories"){
        response.end(categories);
    }else{
       
        if(REQUEST_URL.includes("/products/")){
            console.log(`REQUEST_URL ${REQUEST_URL}`)
            const path = REQUEST_URL.split("/");
            const productId = path[path.length - 1];
            console.log("Product ID:", productId);
            const productsList = JSON.parse(products);
            // Here productId is string
            // product.id == productId

            // String to Number
            // 1. Number.parseInt("3"); // 3
            // 2. parseInt("3"); // 3
            // 3. +"3"; // 3

            // JSON.parse     => string -> object/array
            // JSON.stringify => object/array -> string  
            // console.log(path,"=====");
            const product = productsList.find(product => product.id ===+ productId);
            console.log("product:", product);
            if(product){
                response.end(JSON.stringify(product));
            }else{
                response.end("No Product....");
            }

        }else{
            response.writeHead(404);
            response.end(`Resource not found. Please try with /categories or /products or /products/{PRODUCT_ID}`)
        }
    }
};

const server = http.createServer(requestListener);
server.listen(80,"localhost",()=>{
    console.log("Server is runnning...");
})