const express = require('express');
const app = express();
const port = 8000;

const fs = require("fs");

// const Common_path = "../14-node-server/data/";
// const categories = fs.readFileSync(`${Common_path}/categories.json`);
// const products = fs.readFileSync(`${Common_path}/products.json`);

function getFileData(path){
    const data = fs.readFileSync(path);
    const json = JSON.parse(data);
    return json;

}
const Common_path = "../14-node-server/data/";
const categories = getFileData(`${Common_path}/categories.json`);
const products = getFileData(`${Common_path}/products.json`);

const handleToProducts = (request,response) =>{
    response.json(products);
}

app.get('/',(request,response)=>{
response.send("Express is running....");
});

app.get("/categories",(request,response)=>{
    response.json(categories);
});

app.get("/products", handleToProducts);

app.get("/products/:productID",(request,response)=>{
    const productId = request.params.productID;
    const product = products.find(product => product.id === parseInt(productId));
    if(!product){
       response.json({
           error:true,
           messgae:`No Product Found with This Product ID ${productId}`
       })
    }else{
        response.json(product);
    }

})

app.listen(port,()=>{
    console.log(`THis component is listen ${port}`);
})
