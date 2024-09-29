const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const connection = require('./config/dbConnection');
const contentRoutes = require('./routes/content.routes.js')

app.use(express.json());
dotEnv.config()
const PORT = process.env.PORT || 4000;

app.get('/api',(req,res)=>{
    res.send("Hello World");
})

app.use('/api/content/',contentRoutes);

app.listen(PORT,()=>{
    connection();
    console.log(`Server listening at ${PORT}`)
})