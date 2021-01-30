const http = require('http');
const express = require('express');
const productRouter = require('./route/product');
const host = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.json());
app.use('/product',productRouter);
app.use('/',(req,res)=>{
    res.send('Esta function');
});



const server = http.createServer(app);
server.listen(port);
console.debug(`Application function http://${host}:${port}`);

