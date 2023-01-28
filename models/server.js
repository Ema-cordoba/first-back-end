const express = require('express');
const { productRouter } = require('../routes/product.routes');
var cors = require('cors');
const { db } = require('../database/db');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4000;
        
        this.paths = {
            user: '/api/v1/user',
            products: '/api/v1/products',
        }
        
        this.database()
        this.middlewares()
        this.routes()
        
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
    }


    routes(){
        this.app.use(this.paths.products , productRouter)
        
    }


    database(){
        db.authenticate()
        .then(()=> console.log('Database authenticated'))
        .catch((err)=>console.log(err))

        db.sync()
        .then(()=>console.log('Database syncred'))
        .catch((err)=>console.log(err))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log("Server is running on port " , this.port)
        })
    }
}

module.exports = Server