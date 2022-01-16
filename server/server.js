const express = require('express') ;
const server = express();
const cors = require('cors');
const addRoute = require('./Routes/add');
const companiesRoute = require('./Routes/companies');

const PORT = process.env.PORT  ||  8080;

server.use(cors());
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());
server.use(addRoute);
server.use(companiesRoute);

if(process.env.NODE_ENV =='production'){
    const path = require('path')

    server.get('/',(req,res)=>{
        server.use(express.static(path.resolve(__dirname,'../','build')));
        res.sendFile(path.resolve(__dirname,'../','build','index.html'))
    })
}



server.listen(PORT, ()=>{
    console.log(`Твой сервер запущен на `)
});


