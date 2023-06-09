const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Sahil_Mandani:MandaniSahil@cluster0.gsvvilk.mongodb.net/test"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;