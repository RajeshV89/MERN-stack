const mongoose = require('mongoose');

 async function connection() { await mongoose.connect('mongodb://localhost:27017/mern-stack-simple')
    .then(()=>console.log('Connect to MongoDB -> mern-stack-simple'))
    .catch((error)=>console.log('Not Connected',error));}

module.exports = connection;