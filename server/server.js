const express = require('express') ;
const server = express();
const cors = require('cors');
const addRoute = require('./Routes/add');
const companiesRoute = require('./Routes/companies');

const PORT = 8080;

server.use(cors());
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());
server.use(addRoute);
server.use(companiesRoute);


server.listen(PORT, ()=>{
    console.log(`Твой сервер запущен на http://localhost:8080`)
});


