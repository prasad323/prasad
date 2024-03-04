const express = require('express')
const app = express()
// const cors = require('cors');
//  app.use(cors());
//  app.use(express.json({limit: '50mb'}))
//  app.use(express.urlencoded({extended:false}));
app.use(express.json());
require('./Db/db')
require('./routes')(app)
const PORT = 3000
app.listen(PORT,() => {
    console.log(`listening at port number ${PORT}`);
})