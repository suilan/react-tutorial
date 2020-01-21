const express = require('express');
const server = express();

const mongoose = require('mongoose');
const requireDir = require('require-dir');

const cors = require('cors');

// Connection
try{
    // mongoose.connect('mongodb+srv://react:react@cluster0-sdk1y.mongodb.net/test?retryWrites=true&w=majority', 
    // { useNewUrlParser:true, useUnifiedTopology:true} );

    mongoose.connect('mongodb://localhost:27017/vale', 
    { useNewUrlParser:true, useUnifiedTopology:true} );
}catch(err){
    throw err;
}

// Imports
server.use(cors());
server.use(express.json());

requireDir('./src/models');

//Routes
server.use('/api', require('./src/routes'));

server.listen(3008);

console.log('server ouvindo na porta 3008');